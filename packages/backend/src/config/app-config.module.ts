import { ConfigException } from '@domain/exceptions/config.exception';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import mongooseConfig from '@config/mongodb/mongoose.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      load: [mongooseConfig],
      isGlobal: true,
      cache: true,
    }),

    MongooseModule.forRootAsync({
      useFactory: async (
        configService: ConfigService,
      ): Promise<MongooseModuleOptions> => {
        const config = configService.get<MongooseModuleOptions>('mongodb');
        if (config === undefined) {
          throw new ConfigException('Mongoose MongoDB config is not set');
        }

        return config;
      },
      inject: [ConfigService],
    }),
  ],
})
export class AppConfigModule {}
