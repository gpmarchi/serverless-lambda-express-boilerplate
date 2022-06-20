class AppError {
  public readonly message: string;

  public readonly statusCode: number;

  public readonly errorCode?: string;

  constructor(message: string, statusCode = 400, errorCode = '') {
    this.message = message;
    this.statusCode = statusCode;
    this.errorCode = errorCode;
  }
}

export { AppError };
