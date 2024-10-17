import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomerDto } from './create-customer.dto';
import {
  IsString,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsEmail,
  Matches,
  ValidateIf,
  IsDate,
  IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ISendNotificationOn } from '../interfaces/customer.interface';

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {
  @IsString({ message: 'O campo nome deve ser uma string' })
  @IsNotEmpty({ message: 'O campo nome não pode ser vazio' })
  @MinLength(4, { message: 'O campo nome deve ter pelo menos 4 caracteres' })
  @MaxLength(50, { message: 'O campo nome deve ter no máximo 50 caracteres' })
  name?: string;

  @ValidateIf(
    (o) => o.whatsapp !== undefined && o.whatsapp !== null && o.whatsapp !== '',
  )
  @IsString({ message: 'O campo whatsapp deve ser uma string' })
  @Matches(/^\d{9,11}$/, {
    message: 'O campo whatsapp deve ter entre 9 e 11 números',
  })
  @IsOptional()
  whatsapp?: string;

  @IsEmail(
    {},
    { message: 'O campo login deve ser um endereço de email válido' },
  )
  @IsNotEmpty({ message: 'O campo login não pode ser vazio' })
  @MaxLength(200, {
    message: 'O campo login deve ter no máximo 200 caracteres',
  })
  login?: string;

  @IsString({ message: 'O campo senha deve ser uma string' })
  @IsNotEmpty({ message: 'O campo senha não pode ser vazio' })
  @MinLength(8, { message: 'A senha deve conter pelo menos 8 caracteres' })
  @MaxLength(20, { message: 'A senha deve conter no máximo 20 caracteres' })
  @Matches(/(?=.*[A-Z])/, {
    message: 'A senha deve conter pelo menos 1 letra maiúscula',
  })
  @Matches(/(?=.*[a-z])/, {
    message: 'A senha deve conter pelo menos 1 letra minúscula',
  })
  @Matches(/(?=.*[0-9])/, {
    message: 'A senha deve conter pelo menos 1 número',
  })
  @Matches(/(?=.*[!@#$%^&*])/, {
    message: 'A senha deve conter pelo menos 1 símbolo',
  })
  password?: string;

  @IsString({ message: 'O campo de serviço deve ser uma string' })
  @IsNotEmpty({ message: 'O campo serviço não pode ser vazio' })
  serviceId?: string;

  @IsString({ message: 'O campo de plano deve ser uma string' })
  @IsNotEmpty({ message: 'O campo plano não pode ser vazio' })
  planId?: string;

  @IsNotEmpty({ message: 'O campo fatura não pode ser vazio' })
  invoice?: string;

  @ValidateIf(
    (o) => o.comment !== undefined && o.comment !== null && o.comment !== '',
  )
  @IsString({ message: 'O campo comentário deve ser uma string' })
  @IsOptional()
  comment?: string;

  @IsDate({ message: 'O campo data de validação deve ser uma data válida' })
  @Type(() => Date)
  @IsOptional()
  validateDate?: Date;

  @IsOptional()
  sendNotificationOn?: ISendNotificationOn;

  @IsOptional()
  @IsString({ message: 'O campo userId deve ser uma string' })
  userId?: string;
}
