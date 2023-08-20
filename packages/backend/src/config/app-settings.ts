import { AppSettings } from '@config/types/app-settings.type';

const appEnv = process.env.APP_ENV || 'dev';
const appName = process.env.APP_NAME || 'Insurance app';

export const appSettings: AppSettings = {
  app: {
    env: appEnv,
    name: appName,
    url: process.env.APP_URL || 'http://localhost',
    port: parseInt(process.env.APP_PORT || '', 10) || 3001,
    version: process.env.APP_VERSION || '1',
  },
  cors: {
    origin: true,
    allowedHeaders: '*',
    methods: 'OPTIONS,POST,PUT,PATCH,DELETE,GET',
  },
};
