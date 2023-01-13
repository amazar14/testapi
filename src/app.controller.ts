import { Controller, Get, Post, Req, HttpCode, Header, Res, HttpStatus, createParamDecorator, ExecutionContext } from '@nestjs/common';
import { AppService } from './app.service';
import * as requestIp from "request-ip";

const IpAddress = createParamDecorator(
  (data, ctx)=>{
  const req = ctx.switchToHttp().getRequest()
  if(req.clientIp) return req.clientIp;
  return requestIp.getClientIp(req)
})
@Controller('common')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('test')
  getHello(@Res() response, @Req() request, @IpAddress() clientIp) {
    // res.status(res.status(HttpStatus.OK))
    response.status(200).send(clientIp.split("ffff:")[1])
    // return this.appService.getHello(request.query);
  }

  @Post('testPost')
  @HttpCode(201)
  @Header('Cache-Control', 'none')
  getPost(): string{
    return this.appService.getHello('posttt')
  }
}
