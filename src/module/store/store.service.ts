import { Injectable } from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Store } from './entities/store.entity';

@Injectable()
export class StoreService {
  constructor(
    @InjectRepository(Store) private storeService: Repository<Store>,
  ) {}

  async create(createStoreDto: CreateStoreDto): Promise<Store> {
    const user = await this.storeService.save({
      name: createStoreDto.name,
    });
    console.log('user');
    return user;
  }

  async findAll() {
    const user = await this.storeService.find();
    return user;
  }

  async findOne(id: number) {
    const user = await this.storeService.findOne({ where: { id } });
    return user;
  }

  async update(id: number, updateStoreDto: UpdateStoreDto) {
    const user = await this.storeService.update(id, updateStoreDto);
    return user;
  }

  async remove(id: number) {
    const user = await this.storeService.delete(id);
    return user;
  }
}
