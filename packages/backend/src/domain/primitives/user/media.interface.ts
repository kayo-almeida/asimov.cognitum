import { MediaTypeEnum } from '@domain/enums/media-type.enum';

export interface IMedia {
  type: MediaTypeEnum;
  thumb: string;
  link: string;
}
