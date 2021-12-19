import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { TranslationService } from './translation.service';
import { TranslationDto } from './dto/translation.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Translation } from './translation.model';

@ApiTags('Translation')
@Controller('translation')
export class TranslationController {
  constructor(private translationService: TranslationService) {}

  @ApiOperation({ summary: 'Create translation' })
  @ApiResponse({ status: 200, type: Translation })
  @Post()
  create(@Body() translationDto: TranslationDto) {
    return this.translationService.create(translationDto);
  }

  @ApiOperation({ summary: 'Get all languages' })
  @ApiResponse({ status: 200, type: [Translation] })
  @Get()
  getAll() {
    return this.translationService.getAll();
  }

  @ApiOperation({ summary: 'Get all languages by translation key' })
  @ApiResponse({ status: 200, type: [Translation] })
  @Get('/getByKey/:key')
  getByKey(@Param('key') key: string) {
    return this.translationService.getByKey(key);
  }

  @ApiOperation({
    summary: 'Update translation by id. Return number of affected rows.',
  })
  @ApiResponse({ status: 200, type: [Translation] })
  @Put(':id')
  updateTranslation(
    @Body() translationDto: TranslationDto,
    @Param('id') id: number,
  ) {
    return this.translationService.update(translationDto, id);
  }
}
