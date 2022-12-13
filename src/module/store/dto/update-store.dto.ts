import { PartialType } from '@nestjs/mapped-types';
import { CreateStoreDto } from './create-store.dto';
import { IsNotEmpty, Length, IsNumber } from 'class-validator';

export class UpdateStoreDto extends PartialType(CreateStoreDto) {

  @IsNotEmpty()
  name: string;
}
