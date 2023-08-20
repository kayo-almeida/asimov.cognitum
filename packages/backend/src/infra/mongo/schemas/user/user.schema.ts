import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

import { IUser } from '@domain/primitives/user/user.interface';
import { EducationPreferencesModel } from '@infra/mongo/schemas/user/education-preferences.schema';
import { PersonalInformationModel } from '@infra/mongo/schemas/user/personal-information.schema';
import { StudyScheduleModel } from '@infra/mongo/schemas/user/study-schedule.schema';
import { VocationalTestModel } from '@infra/mongo/schemas/user/vocational-test.schema';

@Schema()
export class UserModel implements IUser {
  @Prop({ required: true })
  _id: string;

  @Prop({ required: false })
  educationPreferences: EducationPreferencesModel;

  @Prop({ required: true })
  personalInformation: PersonalInformationModel;

  @Prop({ required: false })
  studySchedule: StudyScheduleModel[];

  @Prop({ required: false })
  vocationalTest: VocationalTestModel[];
}

export type UserDocument = HydratedDocument<UserModel>;
export const UserSchema = SchemaFactory.createForClass(UserModel);
