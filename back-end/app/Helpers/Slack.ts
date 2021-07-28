import * as https from 'https';
import Env from '@ioc:Adonis/Core/Env';
import Order from 'App/Models/Order';
export default class SlackHelper {
  public async post(message: JSON) {
    return new Promise((resolve, reject) => {
      let options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        host: 'hooks.slack.com',
        path: Env.get('SLACK_CHANNEL'),
      };

      let req = https.request(options, (res) => {
        let result = '';

        res.on('data', (data) => {
          result += data;
        });

        res.on('end', () => {
          console.log('RESULTADO:', result);
          resolve(result);
        });
      });

      req.on('error', (err: Error) => {
        reject(err.message);
      });

      const msg: string = JSON.stringify(message);
      // console.log(msg);
      req.write(msg);
      req.end();
    });
  }

  public formatOrder(order: Order): JSON {
    let blocks = new Array();

    blocks.push({
      type: 'section',
      text: {
        type: 'mrkdwn',
        text: `Você tem um novo pedido de:\n*${order.email}*`,
      },
      accessory: {
        type: 'image',
        image_url: 'https://api.slack.com/img/blocks/bkb_template_images/notifications.png',
        alt_text: 'calendar thumbnail',
      },
    });

    let total: number = 0;

    order.books.forEach((book) => {
      total = total + book.$extras.pivot_value_order;

      blocks.push({
        type: 'section',
        fields: [
          {
            type: 'mrkdwn',
            text: `*Livro:*\n${book.title}`,
          },
          {
            type: 'mrkdwn',
            text: `*Código:*\n${book.barcode}`,
          },
          {
            type: 'mrkdwn',
            text: `*Preço Unitário:*\nR$ ${book.value}`,
          },
          {
            type: 'mrkdwn',
            text: `*Quantidade:*\n${book.$extras.pivot_quantity}`,
          },
          {
            type: 'mrkdwn',
            text: `*Total:*\nR$ ${book.$extras.pivot_value_order}`,
          },
        ],
      });
    });

    blocks.push({
      type: 'section',
      fields: [
        {
          type: 'mrkdwn',
          text: `*Total Geral:*\nR$ ${total}`,
        },
      ],
    });

    let ret: JSON = <JSON>(<unknown>{
      blocks: blocks,
    });

    return ret;
  }
}
