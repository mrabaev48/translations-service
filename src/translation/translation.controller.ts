import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTranslationDto } from './dto/create-translation.dto';
import { TranslationService } from './translation.service';

@Controller('translations')
export class TranslationController {
  constructor(private translationService: TranslationService) {}

  @Post()
  create(@Body() translationDto: CreateTranslationDto) {
    console.log(translationDto);
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
}
