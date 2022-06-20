import { Router } from 'express';

import { CustomersController } from '../controllers/CustomersController';
import createCustomerValidator from '../validators/CreateCustomerValidator';

const customersRouter = Router();

const customersController = new CustomersController();

customersRouter.post('/', createCustomerValidator, customersController.create);

export { customersRouter };
