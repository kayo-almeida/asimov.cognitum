import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HealthzController } from '@api/healthz/healthz.controller';
import { HealthzService } from '@api/healthz/healthz.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [TerminusModule, HttpModule],
  controllers: [HealthzController],
  providers: [HealthzService],
})
export class HealthzModule {}
