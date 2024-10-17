import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {
  IsString,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsEmail,
  Matches,
} from 'class-validator';
import { UserStatus, UserType } from '../entities/user.enum';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString({ message: 'O campo nome deve ser uma string' })
  @IsNotEmpty({ message: 'O campo nome não pode ser vazio' })
  @MinLength(4, { message: 'O campo nome deve ter pelo menos 4 caracteres' })
  @MaxLength(50, { message: 'O campo nome deve ter no máximo 50 caracteres' })
  name: string;

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
  password: string;

  @IsString({ message: 'O campo whatsapp deve ser uma string' })
  @IsNotEmpty({ message: 'O campo whatsapp não pode ser vazio' })
  @Matches(/^\d{9,11}$/, {
    message: 'O campo whatsapp deve ter entre 9 e 11 números',
  })
  whatsapp?: string;

  @IsEmail(
    {},
    { message: 'O campo email deve ser um endereço de email válido' },
  )
  @IsNotEmpty({ message: 'O campo email não pode ser vazio' })
  @MaxLength(200, {
    message: 'O campo email deve ter no máximo 200 caracteres',
  })
  email: string;

  @IsString({ message: 'O campo matrícula deve ser uma string' })
  @IsNotEmpty({ message: 'O campo matrícula não pode ser vazio' })
  @MinLength(4, {
    message: 'O campo matrícula deve ter pelo menos 4 caracteres',
  })
  @MaxLength(20, {
    message: 'O campo matrícula deve ter no máximo 20 caracteres',
  })
  registration?: string;

  @IsString({ message: 'O campo empresa deve ser uma string' })
  @IsNotEmpty({ message: 'O campo empresa não pode ser vazio' })
  @MinLength(4, { message: 'O campo empresa deve ter pelo menos 4 caracteres' })
  @MaxLength(50, {
    message: 'O campo empresa deve ter no máximo 50 caracteres',
  })
  company?: string;

  @IsNotEmpty({ message: 'O campo status precisa ser selecionado' })
  status: UserStatus;

  @IsNotEmpty({ message: 'O campo tipo precisa ser selecionado' })
  type: UserType;

  deleted: boolean;
  email_verified: boolean;
  whats_verified: boolean;
}
