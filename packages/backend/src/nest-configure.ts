import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as compression from 'compression';
import * as xss from 'xss-clean';
import helmet from 'helmet';

import {
  INestApplication,
  ValidationPipe,
  VersioningType,
} from '@nestjs/common';

import { appSettings } from '@config/app-settings';
import { ConfigService } from '@nestjs/config';
import { ExceptionViewer } from '@api/filters/exception-viewer.filter';
import { GlobalExceptionFilter } from '@api/filters/global-exception.filter';
import { ResponseInterceptor } from '@api/interceptors/response.interceptor';
import { writeFileSync } from 'fs';

export async function configureNest(app: INestApplication) {
  const appOptions = appSettings.app;
  const corsOptions = appSettings.cors;

  app
    .enableVersioning({
      defaultVersion: appOptions.version,
      type: VersioningType.URI,
    })
    .use(helmet.xssFilter())
    .use(compression())
    .use(xss())
    .useGlobalPipes(
      new ValidationPipe({
        skipMissingProperties: true,
        whitelist: true,
        forbidNonWhitelisted: false,
        transform: true,
        transformOptions: {
          enableImplicitConversion: true,
        },
      }),
    )
    .useGlobalFilters(new GlobalExceptionFilter())
    .useGlobalInterceptors(new ResponseInterceptor());

  app.enableCors(corsOptions);
  app.getHttpAdapter().getInstance().set('etag', false);

  const flub = new ExceptionViewer(app);
  await flub.configure();

  const config = new DocumentBuilder()
    .setTitle('ASMV')
    .setDescription('Escola do amanhã')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  writeFileSync('./swagger-spec.json', JSON.stringify(document));
  SwaggerModule.setup('api', app, document);
}
