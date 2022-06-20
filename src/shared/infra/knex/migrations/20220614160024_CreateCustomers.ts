import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('customers', tableBuilder => {
    tableBuilder.uuid('id').primary();
    tableBuilder.string('first_name').notNullable();
    tableBuilder.string('last_name').notNullable();
    tableBuilder.string('username').unique().notNullable();
    tableBuilder.string('email').unique().notNullable();
    tableBuilder.string('password').notNullable();
    tableBuilder.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('customers');
}
