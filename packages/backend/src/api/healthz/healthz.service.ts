import { Injectable } from '@nestjs/common';
import {
  HealthIndicatorResult,
  MongooseHealthIndicator,
} from '@nestjs/terminus';

@Injectable()
export class HealthzService {
  constructor(private readonly db: MongooseHealthIndicator) {}

  public async isMongoHealthy(): Promise<HealthIndicatorResult> {
    return this.db.pingCheck('mongodb', { timeout: 1500 });
  }
}
