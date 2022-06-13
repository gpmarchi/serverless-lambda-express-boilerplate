export const handle = async event => ({
  statusCode: 201,
  body: JSON.stringify({
    message: 'Hello world ignite serverless',
  }),
  headers: {
    'Content-Type': 'application/json',
  },
});
