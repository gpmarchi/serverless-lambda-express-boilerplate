import express, { Request, Response } from 'express';
import * as ServerlessHttp from 'serverless-http';

import '@shared/container';

import { CreateCustomerService } from '@modules/customers/services/CreateCustomerService';

const app = express();
app.use(express.json());

app.get('/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello' });
});

app.post('/customers', async (req: Request, res: Response) => {
  const { first_name, last_name, username, email, password } = req.body;

  const customersRepository = new CustomersRepository();
  const createCustomer = new CreateCustomerService(customersRepository);

  const customer = await createCustomer.execute({
    first_name,
    last_name,
    username,
    email,
    password,
  });

  res.json(customer);
});

const handler = ServerlessHttp(app);

export { handler };
