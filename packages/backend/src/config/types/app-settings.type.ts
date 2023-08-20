import { AppOptions } from '@config/types/app-options.type';
import { CORSOptions } from '@config/types/cors-options.type';

export type AppSettings = {
  app: AppOptions;
  cors: CORSOptions;
};
