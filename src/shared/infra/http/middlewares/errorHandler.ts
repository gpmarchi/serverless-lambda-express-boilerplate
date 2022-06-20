import { CelebrateError } from 'celebrate';
import { Request, Response, NextFunction } from 'express';

import { AppError } from '@shared/errors/AppError';

function errorHandler(
  error: Error,
  request: Request,
  response: Response,
  _: NextFunction,
): Response {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      errorCode: error.errorCode,
      message: error.message,
    });
  }

  if (error instanceof CelebrateError) {
    const bodyMessage = error.details.get('body')?.message;
    const queryMessage = error.details.get('query')?.message;
    const paramsMessage = error.details.get('params')?.message;
    const headersMessage = error.details.get('headers')?.message;

    return response.status(400).json({
      status: 'error',
      errorCode: 'validation.error',
      message: bodyMessage || queryMessage || paramsMessage || headersMessage,
    });
  }

  console.error(error);

  return response.status(500).json({
    status: 'error',
    errorCode: 'server.error',
    message: 'Internal server error',
  });
}

export { errorHandler };
