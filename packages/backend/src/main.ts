import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { appSettings } from '@config/app-settings';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const appOptions = appSettings.app;

  const config = new DocumentBuilder()
    .setTitle('Asmv')
    .setDescription('Escola do amanhã')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(appOptions.port);

  console.warn(
    `\n\nApplication is running on: ${appOptions.url}:${appOptions.port} 🚀`,
  );
}

bootstrap();
