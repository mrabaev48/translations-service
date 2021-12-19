import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { TranslationService } from './translation.service';
import { TranslationDto } from './dto/translation.dto';

@Controller('translation')
export class TranslationController {
  constructor(private translationService: TranslationService) {}

  @Post()
  create(@Body() translationDto: TranslationDto) {
    return this.translationService.createTranslation(translationDto);
  }

  @Get()
  getAll() {
    return this.translationService.getAll();
  }

  @Get('/getByKey/:key')
  getByKey(@Param('key') key: string) {
    return this.translationService.getByKey(key);
  }

  @Put()
  updateTranslation(@Body() translationDto: TranslationDto) {

  }
}
