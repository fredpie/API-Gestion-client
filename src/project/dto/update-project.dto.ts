import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectDto } from './create-project.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateProjectDto extends PartialType(CreateProjectDto){
    @ApiProperty({
        description: 'Project name',
        example: 'Kitchen renovation',
        required: false
    })
    name?: string;
}