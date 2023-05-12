import { Injectable } from '@nestjs/common';
import {user} from './interface/interface';

@Injectable()
export class AppService {
  
  private readonly users:user[] =[];

  getAll(): user[] {
    return this.users;
  }

  addProduct(a: user) {
   return this.users.push(a)
  }
}
