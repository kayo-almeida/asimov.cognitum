import { appSettings } from '@config/app-settings';
import { Injectable } from '@nestjs/common';
import {
  HealthIndicatorResult,
  HttpHealthIndicator,
  MongooseHealthIndicator,
} from '@nestjs/terminus';

@Injectable()
export class HealthzService {
  constructor(
    private readonly db: MongooseHealthIndicator,
    private http: HttpHealthIndicator,
  ) {}

  public async isMongoHealthy(): Promise<HealthIndicatorResult> {
    return this.db.pingCheck('mongodb', { timeout: 1500 });
  }

  public async isOpenAIHealthy(): Promise<HealthIndicatorResult> {
    return this.http.pingCheck('OpenAI', appSettings.openAi.url);
  }
}
