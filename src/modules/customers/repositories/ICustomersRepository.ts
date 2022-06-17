import { ICustomer } from '../infra/knex/entities/ICustomer';

interface ICustomersRepository {
  create(customerData: ICustomer): Promise<ICustomer>;
}

export { ICustomersRepository };
