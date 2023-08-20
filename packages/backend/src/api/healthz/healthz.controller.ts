import {
  Controller,
  Get,
  ServiceUnavailableException,
  VERSION_NEUTRAL,
} from '@nestjs/common';
import { HealthCheck, HealthCheckService } from '@nestjs/terminus';
import { HealthzService } from '@infra/service/healthz.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller({ version: VERSION_NEUTRAL })
export class HealthzController {
  constructor(
    private health: HealthCheckService,
    private healthzService: HealthzService,
  ) {}

  @Get('healthz')
  @ApiTags('health check')
  @ApiOperation({
    summary: 'check if the application, MongoDb and OpenAI is up',
  })
  @HealthCheck()
  public async healthCheck() {
    try {
      await this.health.check([
        async () => this.healthzService.isMongoHealthy(),
      ]);

      await this.health.check([
        async () => this.healthzService.isOpenAIHealthy(),
      ]);
    } catch (err) {
      throw new ServiceUnavailableException(err);
    }

    return 'healthy';
  }
}
