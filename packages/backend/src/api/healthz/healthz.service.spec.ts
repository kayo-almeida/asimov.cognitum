import {
  HealthIndicatorResult,
  HttpHealthIndicator,
  MongooseHealthIndicator,
} from '@nestjs/terminus';
import { HealthzService } from '@api/healthz/healthz.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('HealthzService', () => {
  let service: HealthzService;
  let db: MongooseHealthIndicator;
  let http: HttpHealthIndicator;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HealthzService,
        {
          provide: MongooseHealthIndicator,
          useValue: {
            pingCheck: jest.fn(),
          },
        },
        {
          provide: HttpHealthIndicator,
          useValue: {
            pingCheck: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<HealthzService>(HealthzService);
    db = module.get<MongooseHealthIndicator>(MongooseHealthIndicator);
    http = module.get<HttpHealthIndicator>(HttpHealthIndicator);
  });

  describe('#isMongoHealthy', () => {
    it('should ping mongo db', async () => {
      // Arrange
      const response = 'foo' as unknown as HealthIndicatorResult;
      jest.spyOn(db, 'pingCheck').mockResolvedValueOnce(response);

      // Act
      const sut = await service.isMongoHealthy();

      // Arrange
      expect(sut).toEqual(response);
      expect(db.pingCheck).toBeCalledTimes(1);
    });

    it('should ping open ai', async () => {
      // Arrange
      const response = 'foo' as unknown as HealthIndicatorResult;
      jest.spyOn(http, 'pingCheck').mockResolvedValueOnce(response);

      // Act
      const sut = await service.isOpenAIHealthy();

      // Arrange
      expect(sut).toEqual(response);
      expect(http.pingCheck).toBeCalledTimes(1);
    });
  });
});
