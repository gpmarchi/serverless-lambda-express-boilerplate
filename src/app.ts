import express, { Request, Response } from 'express';
import * as ServerlessHttp from 'serverless-http';

const app = express();
app.use(express.json());

app.get('/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello' });
});

app.post('/hello', (req: Request, res: Response) => {
  const { message } = req.body;

  console.log(message);

  res.json({ message: 'Message received' });
});

const handler = ServerlessHttp(app);

export { handler };
