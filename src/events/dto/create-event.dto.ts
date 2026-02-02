import { Status } from "@prisma/client";
import { Type } from "class-transformer";
import { IsDate, IsEnum, IsNumber, IsString } from "class-validator";

export class CreateEventDto 
{
    @IsString()
    title: string;
    @IsString()
    descrption: string;
    @IsDate()
    @Type(() => Date)
    startDateTime: Date;
    @IsDate()
    @Type(() => Date)
    endDateTime: Date; 
    @IsEnum(Status)
    status?: Status;  //-----> ? para tornar o campo opcional
    @IsNumber()
    userId: number;
}
