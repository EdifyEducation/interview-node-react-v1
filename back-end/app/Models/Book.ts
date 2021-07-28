import { DateTime } from 'luxon';
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm';

export default class Book extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public title: String;

  @column()
  public description: String;

  @column()
  public image: String;

  @column()
  public barcode: String;

  @column()
  public value: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  public serializeExtras() {
    if (this.$extras.pivot_quantity) {
      return {
        ordered: {},
      };
    }
  }
}
