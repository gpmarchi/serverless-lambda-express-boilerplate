import { Router } from 'express';

import { customersRouter } from '@modules/customers/infra/http/routes/customer.routes';

const routes = Router();

routes.use('/customers', customersRouter);

export { routes };
