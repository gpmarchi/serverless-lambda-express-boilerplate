import { ICustomer } from '../infra/knex/entities/ICustomer';

interface ICustomersRepository {
  create(customerData: ICustomer): Promise<ICustomer>;

  findByUsername(username: string): Promise<ICustomer>;

  findByEmail(email: string): Promise<ICustomer>;
}

export { ICustomersRepository };
