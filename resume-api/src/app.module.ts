import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

import { UserManagementModule } from './user-management/user-management.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DEV_DATABASE),
    UserManagementModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
