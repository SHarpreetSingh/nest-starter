import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoreModule } from './module/store/store.module';
import { typeOrmConfig } from '../db/data-source';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [StoreModule, TypeOrmModule.forRoot(typeOrmConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
