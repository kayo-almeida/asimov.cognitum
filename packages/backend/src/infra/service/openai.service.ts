import { UserRepository } from '@infra/mongo/repository/user.repository';
import { OpenAIRepository } from '@infra/openai/repository/openai.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OpenAIService {
  constructor(
    private readonly userRepository: UserRepository,
    private openAIRepository: OpenAIRepository,
  ) {}

  async getCourseRecommendationByUserVocationTest(_id: string): Promise<null> {
    const user = await this.userRepository.findOne({ _id });

    if (!user) {
      return null;
    }

    const courseList = await this.openAIRepository.getCourseRecommendation(
      user.vocationalTest,
    );

    console.log({ courseList });

    return null;
  }
}
