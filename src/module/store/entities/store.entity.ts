import { ApiProperty } from '@nestjs/swagger';
// import { Store } from 'src/module/store/entities/store.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('store')
export class Store extends BaseEntity {
  @ApiProperty({ description: 'User unique id', example: 1 })
  @PrimaryGeneratedColumn({ comment: 'This is store' })
  id: number;

  // @ApiProperty({ description: 'User has some name', example: 1 })
  @Column({ type: 'varchar' })
  name: string;
}
