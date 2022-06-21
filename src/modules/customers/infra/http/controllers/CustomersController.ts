import { instanceToInstance } from 'class-transformer';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateCustomerService } from '@modules/customers/services/CreateCustomerService';

class CustomersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { first_name, last_name, username, email, password } = request.body;

    const createCustomer = container.resolve(CreateCustomerService);

    const customer = await createCustomer.execute({
      first_name,
      last_name,
      username,
      email,
      password,
    });

    return response.json(instanceToInstance(customer));
  }
}

export { CustomersController };
