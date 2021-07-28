import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Slack from 'App/Helpers/Slack';

export default class SlackController {
  public async create({ request, response }: HttpContextContract) {
    const { message } = request.only(['message']);

    const slack = new Slack();
    const res = await slack.post(message);

    if (res === 'ok') {
      return response.ok({
        code: 'A-001',
        message: 'MENSAGEM ENVIADA COM SUCESSO',
      });
    }

    return response.ok({
      code: 'E-010',
      message: res,
    });
  }
}
