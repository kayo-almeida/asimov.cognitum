import { IsNotEmpty, IsUUID } from 'class-validator';

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IUser } from '@domain/primitives/user/user.interface';
import { IEducationPreferences } from '@domain/primitives/user/education-preferences.interface';
import { IPersonalInformation } from '@domain/primitives/user/personal-information.interface';
import { IStudySchedule } from '@domain/primitives/user/study-schedule.interface';
import { IVocationalTest } from '@domain/primitives/user/vocational-test.interface';
import { EducationModalityEnum } from '@domain/enums/education-modality.enum';
import { EducationTypeEnum } from '@domain/enums/education-type.enum';
import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class EducationPreferencesDto implements IEducationPreferences {
  @ApiPropertyOptional({
    description: 'Number of months the user has to study',
    example: 10,
  })
  @IsNumber()
  amountOfMonths: number;

  @ApiPropertyOptional({
    description: 'Number of hours per day that the user has to study',
    example: 4,
  })
  @IsNumber()
  hoursOfStudyPerDay: number;

  @ApiPropertyOptional({
    description: 'User investment intention',
    example: 800.0,
  })
  @IsNumber()
  investmentIntention: number;

  @ApiPropertyOptional({
    description: 'Type of study modality',
    enum: EducationModalityEnum,
  })
  @IsEnum(EducationModalityEnum)
  modality: EducationModalityEnum;

  @ApiPropertyOptional({
    description: 'Type of course the user wants to attend',
    enum: EducationTypeEnum,
  })
  @IsEnum(EducationTypeEnum)
  type: EducationTypeEnum;
}

class PersonalInformationDto implements IPersonalInformation {
  @ApiPropertyOptional({ description: 'User name', example: 'John Doe' })
  @IsString()
  name: string;

  @ApiPropertyOptional({ description: 'User phone', example: '+5511941102424' })
  @IsString()
  phone: string;

  @ApiPropertyOptional({ description: 'User zipcode', example: '09910700' })
  @IsString()
  zipCode: string;

  @ApiPropertyOptional({ description: 'User age', example: 18 })
  @IsNumber()
  age: number;

  @ApiPropertyOptional({
    description: 'User email',
    example: 'johndoe@gmail.com',
  })
  @IsString()
  email: string;
}

class StudyScheduleDto implements IStudySchedule {
  @ApiPropertyOptional({ description: 'Lesson matter', example: 'Matemática' })
  @IsString()
  category: string;

  @ApiPropertyOptional({
    description: 'Sub topic of the matter',
    example: 'Algebra',
  })
  @IsString()
  topic: string;

  @ApiPropertyOptional({
    description: 'Text with description of the lesson',
    example: 'foo bar',
  })
  @IsString()
  content: string;
}

class VocationalTestDto implements IVocationalTest {
  @ApiPropertyOptional({
    description: 'Vocational test question text',
    example: 'Foo bar',
  })
  @IsString()
  question: string;

  @ApiPropertyOptional({
    description: 'Vocational test answers options list',
    example: ['option1', 'option2', 'option3', 'option4'],
  })
  options: string[];

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Selected answers options list',
    example: 2,
  })
  @IsNumber()
  answers?: number;
}

export class CreateUserBodyRequestDto implements Omit<IUser, '_id'> {
  @ApiPropertyOptional({
    description: 'Education preferences',
    example: EducationPreferencesDto,
    type: EducationPreferencesDto,
  })
  @Type(() => EducationPreferencesDto)
  @ValidateNested({ each: true })
  educationPreferences?: EducationPreferencesDto;

  @ApiPropertyOptional({
    description: '',
    example: PersonalInformationDto,
    type: PersonalInformationDto,
  })
  @Type(() => PersonalInformationDto)
  @ValidateNested({ each: true })
  personalInformation: PersonalInformationDto;

  @ApiPropertyOptional({
    description: '',
    example: StudyScheduleDto,
    type: [StudyScheduleDto],
  })
  @Type(() => StudyScheduleDto)
  @ValidateNested({ each: true })
  studySchedule?: StudyScheduleDto[];

  @ApiPropertyOptional({
    description: '',
    example: VocationalTestDto,
    type: [VocationalTestDto],
  })
  @Type(() => VocationalTestDto)
  @ValidateNested({ each: true })
  vocationalTest?: VocationalTestDto[];
}
