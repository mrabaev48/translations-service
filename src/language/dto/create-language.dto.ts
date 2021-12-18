import { ApiProperty } from '@nestjs/swagger';

export class CreateLanguageDto {
  @ApiProperty({ example: 'English', description: 'Language name' })
  readonly langName: string;
  @ApiProperty({ example: 'en', description: 'Language abbreviation' })
  readonly langAbbreviation: string;
}
