import { EducationModalityEnum } from '@domain/enums/education-modality.enum';
import { EducationTypeEnum } from '@domain/enums/education-type.enum';

export interface IEducationPreferences {
  modality: EducationModalityEnum;
  type: EducationTypeEnum;
  investmentIntention: number;
  hoursOfStudyPerDay: number;
  amountOfMonths: number;
}
