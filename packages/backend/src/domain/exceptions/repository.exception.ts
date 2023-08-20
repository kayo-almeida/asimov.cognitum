import { BaseError } from 'make-error';

export class RepositoryException extends BaseError {
  constructor(message?: string) {
    super(message);
  }
}
