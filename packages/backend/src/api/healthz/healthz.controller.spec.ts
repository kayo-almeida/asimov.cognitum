import { Test, TestingModule } from '@nestjs/testing';
import { HealthzController } from './healthz.controller';
import { HealthzService } from './healthz.service';
import { HealthCheckService } from '@nestjs/terminus';
import { ServiceUnavailableException } from '@nestjs/common';

describe('HealthzController', () => {
  let controller: HealthzController;
  let healthzService: HealthzService;
  let healthCheckService: HealthCheckService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      providers: [
        HealthzController,
        {
          provide: HealthzService,
          useValue: {
            isMongoHealthy: jest.fn(),
            isOpenAIHealthy: jest.fn(),
          },
        },
        {
          provide: HealthCheckService,
          useValue: {
            check: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = await module.resolve<HealthzController>(HealthzController);
    healthzService = module.get<HealthzService>(HealthzService);
    healthCheckService = module.get<HealthCheckService>(HealthCheckService);
  });

  describe('#healthCheck', () => {
    it('should call mongo db and open ai health check successful', async () => {
      // Arrange
      jest.spyOn(healthzService, 'isMongoHealthy').mockResolvedValueOnce({});
      jest.spyOn(healthzService, 'isOpenAIHealthy').mockResolvedValueOnce({});

      // Act
      const sut = await controller.healthCheck();

      // Assert
      expect(sut).toEqual('healthy');
    });

    it('should call mongo db and open ai health return a error', async () => {
      // Arrange
      const error = new Error('error');

      jest
        .spyOn(healthCheckService, 'check')
        .mockRejectedValueOnce(new ServiceUnavailableException(error));

      // Act
      const sut = () => controller.healthCheck();

      // Assert
      await expect(sut).rejects.toThrow(error);
    });
  });
});
