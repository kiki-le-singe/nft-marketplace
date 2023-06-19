import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getGreetings(): string {
    return 'Welcome to the NestJS API!';
  }
}
