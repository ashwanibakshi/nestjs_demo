import { Body, Controller, Get, Post, Req} from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';
import { user } from './interface/interface';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('showall')
  getAll(): user[] {
    return this.appService.getAll();
  }

     @Post('add')
     addData(@Req() request: Request){
       var x = this.appService.addProduct(request.body)
       if(x>0){
        return 'data successfully added'
       }
     }
  }
