import { Module } from '@nestjs/common';
import { HealthzModule } from '@api/healthz/healthz.module';
import { AppConfigModule } from '@config/app-config.module';
import { UserModule } from '@api/user/user.module';

@Module({
  imports: [AppConfigModule, HealthzModule, UserModule],
})
export class AppModule {}
