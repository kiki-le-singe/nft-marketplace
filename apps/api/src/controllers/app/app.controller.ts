import { Controller, Get } from '@nestjs/common';
import { AppService } from 'src/services/app/app.service';

@Controller({})
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getGreetings(): string {
    return this.appService.getGreetings();
  }
}
