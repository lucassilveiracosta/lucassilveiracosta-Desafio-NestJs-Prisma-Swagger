import { IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty({ example: 'example@email.com', description: 'endereço de e-mail do usuário' })
    @IsString()  //Decorator para verificar se é String
    email: string;

    @ApiProperty({ example: 'Pablo Picasso', description: 'Nome do usuário' })
    @IsString()
    fullName: string;

    @ApiProperty({ example: '11111111100', description: 'CPF do usuário' })
    @IsString()
    cpf: string;

    @ApiProperty({ example: 'senha123', description: 'Senha do usuário' })
    @IsString()
    password: string;

    @ApiProperty({ example: '(DDD) 9 1234-5678', description: 'Número de telefone do usuário' })
    @IsString()
    phoneNumber: string;

    @ApiProperty({ example: 'AAAA-MM-DD', description: 'Data de nascimento do usuário' })
    @IsDate()
    @Type(() => Date)
    birthDate: Date;
}
