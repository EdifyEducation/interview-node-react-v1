import { DateTime } from 'luxon';
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm';
import { manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm';
import Book from 'App/Models/Book';

export default class Order extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public email: String;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @manyToMany(() => Book, {
    pivotTimestamps: true,
    pivotColumns: ['quantity', 'value_order', 'created_at', 'updated_at'],
  })
  public books: ManyToMany<typeof Book>;
}
