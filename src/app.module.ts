import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MONGODB } from './app.properties';
import { ClientModule } from './client/client.module';

@Module({
  imports: [ClientModule, MongooseModule.forRoot(MONGODB)],
})
export class AppModule {}
