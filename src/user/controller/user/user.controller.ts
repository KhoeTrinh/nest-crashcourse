import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from 'src/user/dtos/CreateUser.dto';
import { UserGuard } from 'src/user/guard/user/user.guard';
import { ValidateCreateUserPipe } from 'src/user/pipes/validate-create-user/validate-create-user.pipe';
import { UserService } from 'src/user/service/user/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  @UseGuards(UserGuard)
  getUsers() {
    return this.userService.fetchUser();
  }

  @Post('create')
  @UsePipes(new ValidationPipe())
  createUser(@Body(ValidateCreateUserPipe) userData: CreateUserDto) {
    return this.userService.createUser(userData);
  }

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    const user = this.userService.fetchUserById(id);
    if (!user)
      throw new HttpException('User not found', HttpStatus.BAD_REQUEST);
    return user;
  }
}
