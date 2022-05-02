import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class createInventoryDto {

    @IsString()
    @IsNotEmpty()
    name: string

    @IsNumber()
    @IsNotEmpty()
    qty: number

    @IsString()
    @IsNotEmpty()
    description: string
}