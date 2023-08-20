import { BaseError } from 'make-error';

export class ServiceException extends BaseError {
  constructor(message?: string) {
    super(message);
  }
}
