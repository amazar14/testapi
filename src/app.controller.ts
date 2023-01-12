import { Controller, Get, Post, Req, HttpCode, Header, Res, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { getHeapCodeStatistics } from 'v8';
console.log(HttpStatus)
@Controller('common')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('test')
  getHello(@Res() response, @Req() request) {
    // res.status(res.status(HttpStatus.OK))
    response.status(200).send(request.host+"__")
    // return this.appService.getHello(request.query);
  }

  @Post('testPost')
  @HttpCode(201)
  @Header('Cache-Control', 'none')
  getPost(): string{
    return this.appService.getHello('posttt')
  }
}
