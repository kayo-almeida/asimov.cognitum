import { IStudySchedule } from '@domain/primitives/user/study-schedule.interface';
import { Prop } from '@nestjs/mongoose';

export class StudyScheduleModel implements IStudySchedule {
  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  topic: string;
}
