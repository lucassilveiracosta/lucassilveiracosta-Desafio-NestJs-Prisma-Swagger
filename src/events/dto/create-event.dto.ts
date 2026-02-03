import { ApiProperty } from "@nestjs/swagger";
import { Status } from "@prisma/client";
import { Type } from "class-transformer";
import { IsDate, IsEnum, IsNumber, IsString } from "class-validator";

export class CreateEventDto 
{
    @ApiProperty({ example: 'Ocupado', description: 'Título do seu evento' })
    @IsString()
    title: string;

    @ApiProperty({ example: 'Trabalhando na Seed', description: 'Descrição do seu evento' })
    @IsString()
    description: string;

    @ApiProperty({ example: 'AAAA-MM-DD', description: 'Data de início do seu evento' })
    @IsDate()
    @Type(() => Date)
    startDateTime: Date;

    @ApiProperty({ example: 'AAAA-MM-DD', description: 'Data de finalização do seu evento '})
    @IsDate()
    @Type(() => Date)
    endDateTime: Date; 

    @ApiProperty({ example: 'SCHEDULED', description: 'Status do evento(SCHEDULED, COMPLETED, CANCELED)' })
    @IsEnum(Status)
    status?: Status;  //-----> ? para tornar o campo opcional

    @ApiProperty({ example: 1, description: 'ID do usuário que terá o evento' })
    @IsNumber()
    userId: number;
}
