import 'reflect-metadata';
import express from 'express';
import ServerlessHttp from 'serverless-http';

import '@shared/container';

import { routes } from '@shared/infra/http/routes';

const app = express();

app.use(express.json());
app.use(routes);

const handler = ServerlessHttp(app);

export { handler };
