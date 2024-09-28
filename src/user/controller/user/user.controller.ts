import {
  Body,
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/user/dtos/CreateUser.dto';

@Controller('user')
export class UserController {
  @Get()
  getUsers(@Query('sortAcs', ParseBoolPipe) sortAcs: boolean) {
    console.log(sortAcs);
    return [{ username: 'Khoa', email: 'Khoa@gmail.com' }];
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  createUser(@Body() userData: CreateUserDto) {
    console.log(userData);
    return {};
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    return { id };
  }
}
