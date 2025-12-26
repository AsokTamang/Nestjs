import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  addSomething():string{
    return 'Something has been added!'
  }
}
