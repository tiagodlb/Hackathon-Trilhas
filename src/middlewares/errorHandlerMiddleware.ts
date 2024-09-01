import { AppError, errorTypeToStatusCode, isAppError } from '@/utils/errorUtils.js'
import { NextFunction, Request, Response } from 'express'

export function errorHandlerMiddleware(
  err: Error | AppError,
  _req: Request,
  res: Response,
  _next: NextFunction
): Response<any> | void {
  console.error('Oops! An error occurred!', err)

  if (isAppError(err)) {
    return res.status(errorTypeToStatusCode(err.type)).send(err.message)
  }

  return res.sendStatus(500)
}
