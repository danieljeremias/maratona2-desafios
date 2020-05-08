import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  index() {
    return { message: this.appService.getHello() };
  }

  @Get('sender')
  @Render('sender')
  sender() {
    return {};
  }

  @Get('receiver')
  @Render('receiver')
  receiver() {
    return {};
  }
}
