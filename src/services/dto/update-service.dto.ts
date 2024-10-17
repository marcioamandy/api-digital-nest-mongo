import { PartialType } from '@nestjs/mapped-types';
import { CreateServiceDto } from './create-service.dto';
import {
  IsString,
  IsNotEmpty,
  IsNumber,
  MinLength,
  MaxLength,
} from 'class-validator';
import { Type } from 'class-transformer';
import mongoose from 'mongoose';

export class UpdateServiceDto extends PartialType(CreateServiceDto) {
  @IsString({ message: 'O campo nome tem que ser uma string' })
  @IsNotEmpty({ message: 'O campo nome não pode ser vazio' })
  @MinLength(4, { message: 'O campo nome deve ter pelo menos 4 caracteres' })
  @MaxLength(50, { message: 'O campo nome deve ter no máximo 50 caracteres' })
  name: string;

  @IsNumber({}, { message: 'O campo custo tem que ser um número' })
  @IsNotEmpty({ message: 'O campo custo não pode ser vazio' })
  @Type(() => mongoose.Types.Decimal128)
  cost: mongoose.Types.Decimal128;
}
