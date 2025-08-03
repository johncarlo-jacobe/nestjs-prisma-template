import { Controller, Get } from '@nestjs/common';

@Controller('api/users')
export class UsersController {
  /*
    POST
    PATCH
    GET
    */

  @Get() // GET api/users
  findAll() {
    return [];
  }
}
