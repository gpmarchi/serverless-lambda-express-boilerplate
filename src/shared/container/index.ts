import { container } from 'tsyringe';

import { CustomersRepository } from '@modules/customers/infra/knex/repositories/CustomersRepository';
import { ICustomersRepository } from '@modules/customers/repositories/ICustomersRepository';

container.registerSingleton<ICustomersRepository>(
  'CustomersRepository',
  CustomersRepository,
);
