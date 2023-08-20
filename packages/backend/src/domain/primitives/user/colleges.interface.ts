import { EducationTypeEnum } from '@domain/enums/education-type.enum';

export interface IColleges {
  course: string;
  rating: number;
  educationType: EducationTypeEnum;
  courseDurationInSemester: number;
  collegePicture: string;
}
