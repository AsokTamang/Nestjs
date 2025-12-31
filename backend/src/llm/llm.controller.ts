import { Body, Controller, Post } from '@nestjs/common';
import { LlmService } from './llm.service';
import { inputDTO } from './dto/input';
@Controller('llm')
export class LlmController {
  constructor(private llmService: LlmService) {}
  @Post('ask')   //here we are making an endpoint of ask, where the client can interact with the llm and ofourse this endpoint is also protected
  Getoutput(@Body() reqField: inputDTO) {
    return (this.llmService.getResult(reqField));
  }
}
