import {
  IsString,
  IsNotEmpty,
  MaxLength,
  IsStrongPassword,
  IsEmail,
} from 'class-validator';

export class LoginUserDTO {
  @IsString({ message: 'O campo senha deve ser uma string' })
  @IsNotEmpty({ message: 'O campo senha não pode ser vazio' })
  @IsStrongPassword(
    {
      minLength: 8,
      minLowercase: 1,
      minNumbers: 1,
      minSymbols: 1,
      minUppercase: 1,
    },
    {
      message:
        'A senha deve conter pelo menos 8 caracteres, 1 letra maiúscula, 1 letra minúscula, 1 número e 1 símbolo',
    },
  )
  password: string;

  @IsEmail(
    {},
    { message: 'O campo email deve ser um endereço de email válido' },
  )
  @IsNotEmpty({ message: 'O campo email não pode ser vazio' })
  @MaxLength(200, {
    message: 'O campo email deve ter no máximo 200 caracteres',
  })
  email: string;
}
