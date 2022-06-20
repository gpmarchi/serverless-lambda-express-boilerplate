import { v4 as uuid } from 'uuid';

import { knex } from '@shared/infra/knex';

import { ICustomersRepository } from '../../../repositories/ICustomersRepository';
import { ICustomer } from '../entities/ICustomer';

class CustomersRepository implements ICustomersRepository {
  public async create(customerData: ICustomer): Promise<ICustomer> {
    const [customer] = await knex<ICustomer>('customers')
      .insert({
        id: uuid(),
        ...customerData,
      })
      .returning('*');

    return customer;
  }

  public async findByUsername(username: string): Promise<ICustomer> {
    const [customer] = await knex<ICustomer>('customers')
      .select('*')
      .where({ username });

    return customer;
  }

  public async findByEmail(email: string): Promise<ICustomer> {
    const [customer] = await knex<ICustomer>('customers')
      .select('*')
      .where({ email });

    return customer;
  }
}

export { CustomersRepository };
