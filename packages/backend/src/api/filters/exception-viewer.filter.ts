import { FlubErrorHandler } from 'nestjs-flub';

import { INestApplication } from '@nestjs/common';

export class ExceptionViewer {
  constructor(private readonly app: INestApplication) {}

  public async configure() {
    try {
      this.app.useGlobalFilters(new FlubErrorHandler());
    } catch (err) {
      console.error('Error configuring exception viewer {err}', { err });
    }
  }
}
