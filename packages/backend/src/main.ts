import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { appSettings } from '@config/app-settings';
import { configureNest } from './nest-configure';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const appOptions = appSettings.app;

  await configureNest(app);

  await app.listen(appOptions.port);

  console.warn(
    `\n\nApplication is running on: ${appOptions.url}:${appOptions.port} 🚀\n\n`,
  );
}

bootstrap();
