import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/type';

@Injectable()
export class UserService {
  private fakeUsers = [
    { username: 'Khoa', email: 'Khoa@gmail.com' },
    { username: 'Khoa', email: 'Khoa@gmail.com' },
  ];
  fetchUser() {
    return this.fakeUsers;
  }

  createUser(userData: CreateUserType) {
    this.fakeUsers.push(userData)
    return this.fakeUsers
  }

  fetchUserById(id: number) {
    return id
  }
}
