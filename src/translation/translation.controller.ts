import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TranslationService } from './translation.service';
import { CreateTranslationDto } from './dto/create-translation.dto';

@Controller('translation')
export class TranslationController {
  constructor(private translationService: TranslationService) {
    console.log('controller');
  }

  @Post()
  create(@Body() createTranslationDto: CreateTranslationDto) {
    return this.translationService.createTranslation(createTranslationDto);
  }

  @Get()
  getAll() {
    return this.translationService.getAll();
  }

  @Get('/getByKey/:key')
  getByKey(@Param('key') key: string) {
    console.log('get by key');
    return this.translationService.getByKey(key);
  }
}
