import { Customer } from '../infra/knex/entities/Customer';
import { ICustomer } from '../infra/knex/entities/ICustomer';

interface ICustomersRepository {
  create(customerData: ICustomer): Promise<Customer>;

  findByUsername(username: string): Promise<ICustomer>;

  findByEmail(email: string): Promise<ICustomer>;
}

export { ICustomersRepository };
