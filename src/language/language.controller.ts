import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateLanguageDto } from './dto/create-language.dto';
import { LanguageService } from './language.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Language } from './language.model';

@ApiTags('Languages')
@Controller('languages')
export class LanguageController {
  constructor(private langService: LanguageService) {}

  @ApiOperation({ summary: 'Create language' })
  @ApiResponse({ status: 200, type: Language })
  @Post()
  create(@Body() langDto: CreateLanguageDto) {
    return this.langService.createLang(langDto);
  }

  @ApiOperation({ summary: 'Get all languages' })
  @ApiResponse({ status: 200, type: [Language] })
  @Get()
  getAll() {
    return this.langService.getAllLangs();
  }

  @ApiOperation({ summary: 'Get all active languages' })
  @ApiResponse({ status: 200, type: [Language] })
  @Get('/getAllActive')
  getAllActive() {
    return this.langService.getAllActiveLangs();
  }
}
