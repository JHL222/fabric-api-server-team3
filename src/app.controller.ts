import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root() {
    return this.appService.getHello();
  }

  @Get('/init')
  async init(
    @Query('user') user:String,
    @Query('userVal') userVal: String,
  ): Promise<string>{
    return this.appService.init(user, userVal);
  }
}
