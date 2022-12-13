// import {} from "@nestj/swagger"
import { IsNotEmpty, Length } from 'class-validator';

export class CreateStoreDto {
  @IsNotEmpty({ message: 'Name cannot empty' })
  @Length(3, 255)
  name: string;
}
