import BaseSeeder from '@ioc:Adonis/Lucid/Seeder';
import Book from 'App/Models/Book';
import * as faker from 'faker';

export default class BookSeeder extends BaseSeeder {
  public async run() {
    const uniqueKey = 'barcode';

    await Book.updateOrCreateMany(uniqueKey, [
      {
        title: faker.lorem.sentence(),
        description: faker.lorem.paragraph(),
        image: '/books/book_01.jpg',
        barcode: 'B-0001',
        value: Math.random() * (500 - 100 + 1) + 100,
      },
      {
        title: faker.lorem.sentence(),
        description: faker.lorem.paragraph(),
        image: '/books/book_02.jpg',
        barcode: 'B-0002',
        value: Math.random() * (500 - 100 + 1) + 100,
      },
      {
        title: faker.lorem.sentence(),
        description: faker.lorem.paragraph(),
        image: '/books/book_03.jpg',
        barcode: 'B-0003',
        value: Math.random() * (500 - 100 + 1) + 100,
      },
    ]);
  }
}
