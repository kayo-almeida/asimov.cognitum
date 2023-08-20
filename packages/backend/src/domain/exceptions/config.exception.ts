import { BaseError } from 'make-error';

export class ConfigException extends BaseError {
  constructor(message?: string) {
    super(message);
  }
}
