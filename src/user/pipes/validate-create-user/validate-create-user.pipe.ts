import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { CreateUserDto } from 'src/user/dtos/CreateUser.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    const ParseAgeToInt = parseInt(value.age.toString());
    if (isNaN(ParseAgeToInt)) {
      console.log(`${value.age} is not a number`);
      throw new HttpException('Age must be a number', HttpStatus.BAD_REQUEST);
    }
    return { ...value, age: ParseAgeToInt };
  }
}
