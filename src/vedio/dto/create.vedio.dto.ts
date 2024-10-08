import { IsString, IsNotEmpty } from 'class-validator';

export class CreateVideoDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;
  @IsNotEmpty()
  @IsString()
  readonly duration: string;  // Duration as a string in mm:ss format
}
