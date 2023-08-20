import { IPersonalInformation } from '@domain/primitives/user/personal-information.interface';
import { IEducationPreferences } from '@domain/primitives/user/education-preferences.interface';
import { IVocationalTest } from './vocational-test.interface';
import { IStudySchedule } from './study-schedule.interface';

export class IUser {
  _id: string;
  personalInformation: IPersonalInformation;
  educationPreferences?: IEducationPreferences;
  vocationalTest?: IVocationalTest[];
  studySchedule?: IStudySchedule[];
}
