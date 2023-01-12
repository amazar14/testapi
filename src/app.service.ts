import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(request): any {
    console.log(request)
    return request;
  }
}
