import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateInventoryDto {

    @IsString()
    @IsNotEmpty()
    id: string

    @IsString()
    @IsOptional()
    name: string

    @IsNumber()
    @IsOptional()
    qty: number

    @IsString()
    @IsOptional()
    description: string
}