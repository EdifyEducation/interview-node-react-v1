import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';

import Book from 'App/Models/Book';

export default class BooksController {
  public async index({}: HttpContextContract) {
    const all = await Book.all();
    return all;
  }

  public async create({ request }: HttpContextContract) {
    const data = request.only(['title', 'description', 'image', 'barcode', 'value']);
    const book = await Book.create(data);
    return book;
  }
}
