import { IPersonalInformation } from '@domain/primitives/user/personal-information.interface';
import { Prop } from '@nestjs/mongoose';

export class PersonalInformationModel implements IPersonalInformation {
  @Prop({ required: true })
  age: number;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  zipCode: string;
}
