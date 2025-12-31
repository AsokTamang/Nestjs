import { Injectable } from '@nestjs/common';
import { inputDTO } from './dto/input';
import OpenAI from 'openai';
import { ConfigService } from '@nestjs/config';
import { ChatCompletionMessageParam } from 'openai/resources/chat';

@Injectable()
export class LlmService {
  constructor(private configService: ConfigService) {}
  async getResult(req: inputDTO) {
    const client = new OpenAI({
      apiKey: this.configService.get('openapikey'),
      dangerouslyAllowBrowser: false, //here we are making our api key to be hidden in any web browser's devtools
    });
    const messages: ChatCompletionMessageParam[] = [
      {
        role: 'system',
        content: 'You are an educator assistant who explains about given complicated topic easily',
      },
      {
        role: 'user',
        content: req.order,
      },
    ];

    const response = await client.chat.completions.create({
      model: 'gpt-4',
      messages: messages,
      temperature:0.2 ,  //here we are making the temperature low which makes the output more focused and deterministic
  //here reasoning_effort makes the model to think more deeply 

    });
    return response.choices[0].message.content; //here we are returning the content returned by our ai model
  
 
  
  }
}
