import BaseSchema from '@ioc:Adonis/Lucid/Schema';

export default class BookOrders extends BaseSchema {
  protected tableName = 'book_order';

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');

      // References
      table.integer('book_id').unsigned().references('books.id');
      table.integer('order_id').unsigned().references('orders.id');

      table.integer('quantity').notNullable();
      table.decimal('value_order').notNullable();

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true });
      table.timestamp('updated_at', { useTz: true });
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
