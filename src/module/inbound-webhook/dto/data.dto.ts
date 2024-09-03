import { IsString, IsUUID, IsDateString, IsObject, IsNumber } from 'class-validator';

export class AdditionalDataDto {
    @IsNumber()
    amount: number;

    @IsString()
    currency: string;
}

export class DataDto {
    @IsUUID()
    id: string;

    @IsString()
    signature: string;

    @IsDateString()
    timestamp: string;

    @IsString()
    event_type: string;

    @IsString()
    new_status: string;

    @IsObject()
    additional_data: AdditionalDataDto;
}
