import { Module } from '@nestjs/common';
import { StoreService } from './store.service';
import { StoreController } from './store.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Store } from './entities/store.entity';

@Module({
  controllers: [StoreController],
  imports: [TypeOrmModule.forFeature([Store])],
  providers: [StoreService],
})
export class StoreModule {}
