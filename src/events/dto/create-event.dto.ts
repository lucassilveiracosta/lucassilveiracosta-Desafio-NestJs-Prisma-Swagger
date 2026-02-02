import { Type } from "class-transformer";
import { IsDate, IsString } from "class-validator";

export class CreateEventDto {
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
    @IsString()
    status: string;
}
