import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('customers', tableBuilder => {
    tableBuilder.uuid('id').primary();
    tableBuilder.string('first_name').notNullable();
    tableBuilder.string('last_name').notNullable();
    tableBuilder.string('username').unique().notNullable();
    tableBuilder.string('email').unique().notNullable();
    tableBuilder.string('password').notNullable();
    tableBuilder.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
    tableBuilder.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('customers');
}
