import { Prop } from '@nestjs/mongoose';

import { IEducationPreferences } from '@domain/primitives/user/education-preferences.interface';
import { EducationModalityEnum } from '@domain/enums/education-modality.enum';
import { EducationTypeEnum } from '@domain/enums/education-type.enum';

export class EducationPreferencesModel implements IEducationPreferences {
  @Prop({ required: true })
  amountOfMonths: number;

  @Prop({ required: true })
  hoursOfStudyPerDay: number;

  @Prop({ required: true })
  investmentIntention: number;

  @Prop({ required: true })
  modality: EducationModalityEnum;

  @Prop({ required: true })
  type: EducationTypeEnum;
}
