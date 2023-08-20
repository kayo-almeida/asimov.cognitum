import { Prop } from '@nestjs/mongoose';

import { IVocationalTest } from '@domain/primitives/user/vocational-test.interface';

export class VocationalTestModel implements IVocationalTest {
  @Prop({ required: true })
  question: string;

  @Prop({ required: true })
  options: string[];

  @Prop({ required: false })
  answers: number;
}
