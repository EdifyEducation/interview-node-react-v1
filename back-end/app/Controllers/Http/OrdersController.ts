import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Order from 'App/Models/Order';
import Book from 'App/Models/Book';
import Slack from 'App/Helpers/Slack';

interface IBooksReceived {
  book_id: number;
  quantity: number;
}

// DTO: Data Transfer Object
interface ICreateDTO {
  email: string;
  books: Array<IBooksReceived>;
}

export default class OrdersController {
  public async index({ response }: HttpContextContract) {
    return response.badRequest({
      code: 'E-002',
      message: 'NÃO SEI O QUE FAZER',
    });
  }

  public async create({ request, response }: HttpContextContract) {
    const { email, books }: ICreateDTO = request.only(['email', 'books']);

    return response.badRequest({
      code: 'E-002',
      message: 'NÃO RECEBI OS LIVROS E AS QUANTIDADES',
    });
  }

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
