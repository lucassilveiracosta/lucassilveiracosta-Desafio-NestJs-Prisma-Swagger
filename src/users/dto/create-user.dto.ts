import { IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";

export class CreateUserDto {
    @IsString()  //Decorator para verificar se é String
    email: string;
    @IsString()
    fullName: string;
    @IsString()
    cpf: string;
    @IsString()
    password: string;
    @IsString()
    phoneNumber: string;
    @IsDate()
    @Type(() => Date)
    birthDate: Date;
}
