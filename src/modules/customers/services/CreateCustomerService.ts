import { ICustomer } from '../infra/knex/entities/ICustomer';
import { ICustomersRepository } from '../repositories/ICustomersRepository';

interface IRequestDTO {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  password: string;
}

class CreateCustomerService {
  private customersRepository: ICustomersRepository;

  constructor(customersRepository: ICustomersRepository) {
    this.customersRepository = customersRepository;
  }

  public async execute({
    first_name,
    last_name,
    username,
    email,
    password,
  }: IRequestDTO): Promise<ICustomer> {
    const customer = await this.customersRepository.create({
      first_name,
      last_name,
      username,
      email,
      password,
    });

    return customer;
  }
}

export { CreateCustomerService };
