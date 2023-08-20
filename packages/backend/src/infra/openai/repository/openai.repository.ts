import { appSettings } from '@config/app-settings';
import { VocationalTestModel } from './../../mongo/schemas/user/vocational-test.schema';
import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class OpenAIRepository {
  private readonly openai = new OpenAI({
    apiKey: appSettings.openAi.secretKey,
  });

  public async getCourseRecommendation(vocationalTests: VocationalTestModel[]) {
    const question = vocationalTests.map((item, key) => {
      return `
        ${key}. **${item.question}**
        - (${item.options[item.answers]}) 
      `;
    });

    const content = `
    Com base nas seguintes perguntas e respostas, considerando que os valores vao de 1 a 5, me recomende um curso de graduação para a pessoa

    ${question.join('\n')}
        

    eu quero a resposta da seguinte forma:

    { curso: string, profissao: string, medial salarial mensal no brasil: string, tempo de graduacao: string, imagem: string }
    a imagem seria uma foto qualquer representando esse curso
  `;

    console.log({ content });

    const completion = await this.openai.chat.completions.create({
      messages: [
        {
          role: 'user',
          content,
        },
      ],
      model: 'gpt-3.5-turbo',
    });

    completion.choices;
  }
}
