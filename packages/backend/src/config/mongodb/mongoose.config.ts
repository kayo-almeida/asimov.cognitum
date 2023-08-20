import mongoose from 'mongoose';

import { ConfigModule, registerAs } from '@nestjs/config';
import { MongooseModuleOptions } from '@nestjs/mongoose';
import { appSettings } from '@config/app-settings';

async function mongooseConfig(): Promise<MongooseModuleOptions> {
  await ConfigModule.envVariablesLoaded;

  if (appSettings.app.env === 'dev') {
    mongoose.set('debug', (collectionName, method, query, doc) => {
      console.debug(`${collectionName}.${method}`, {
        query,
        doc,
      });
    });
  }

  return {
    uri: `${process.env.MONGODB_CONNECTION_STRING}/${process.env.MONGODB_DATABASE_INFO}`,
  };
}

export default registerAs(
  process.env.MONGODB_APP_REGISTER_NAME || 'mongodb',
  async (): Promise<MongooseModuleOptions> => mongooseConfig(),
);
