import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {message: 'Hello World!'};
  }

  async init(user:string, userVal:string){
    const args = [user, userVal];
    return await send(false, 'init', args);
  }
}
