import {
    IsNotEmpty,
    IsOptional,
    IsNumber,
    IsString,
    IsDateString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class CreateProjectDto {
    @ApiProperty({ 
        description: 'Project name',
        example: 'Kitchen renovation'
    })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({ 
        description: 'Project description',
        example: 'Complete renovation of the kitchen including new cabinets, countertops, and appliances.'
    })
    @IsNotEmpty()
    @IsString()
    description: string;

    @ApiProperty({ 
        description: 'Project start date',
        example: '2022-01-01'
    })
    @IsNotEmpty()
    @IsDateString()
    startDate: Date;

    @ApiProperty({ 
        description: 'Project end date', 
        required: false,
        example: '2022-06-30'
    })
    @IsOptional()
    @IsDateString()
    endDate?: Date;

    @ApiProperty({ 
        description: 'Project budget',
        example: 25000
    })
    @IsNotEmpty()
    @IsNumber()
    budget: number;

    @ApiProperty({ 
        description: 'Client ID',
        example: 1
    })
    @IsNotEmpty()
    @IsNumber()
    clientId: number;

    @ApiProperty({ 
        description: 'Contractor ID',
        example: 1
    })
    @IsNotEmpty()
    @IsNumber()
    contractorId: number;
}