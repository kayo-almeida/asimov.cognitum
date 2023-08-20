import { Module } from '@nestjs/common';
import { HealthzModule } from '@api/healthz/healthz.module';
import { AppConfigModule } from '@config/app-config.module';

@Module({
  imports: [AppConfigModule, HealthzModule],
})
export class AppModule {}
