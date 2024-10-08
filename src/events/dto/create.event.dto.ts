import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDateString, IsNotEmpty } from 'class-validator';

export class CreateEventDto {
  @ApiProperty({ description: 'Name of the event' })
  @IsString()
  @IsNotEmpty()
  eventName: string;

  @ApiProperty({ description: 'Date of the event' })
  @IsDateString()
  @IsNotEmpty()
  eventDate: string;

  @ApiProperty({ description: 'Description of the event' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ description: 'Location of the event' })
  @IsString()
  @IsNotEmpty()
  location: string;

  @ApiProperty({ description: 'Name of the speaker' })
  @IsString()
  @IsNotEmpty()
  speakerName: string;

}