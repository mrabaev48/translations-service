import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateLanguageDto } from './dto/create-language.dto';
import { LanguageService } from './language.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Language } from './language.model';
import { UpdateLanguageDto } from './dto/update-language.dto';

@ApiTags('Language')
@Controller('language')
export class LanguageController {
  constructor(private langService: LanguageService) {}

  @ApiOperation({ summary: 'Create language' })
  @ApiResponse({ status: 200, type: Language })
  @Post()
  create(@Body() langDto: CreateLanguageDto) {
    return this.langService.create(langDto);
  }

  @ApiOperation({ summary: 'Get all languages' })
  @ApiResponse({ status: 200, type: [Language] })
  @Get()
  getAll() {
    return this.langService.getAll();
  }

  @Get('/:id')
  getLangById(@Param('id') id: number) {
    return this.langService.getByIdOrThrowNotFound(id);
  }

  @ApiOperation({ summary: 'Get all active languages' })
  @ApiResponse({ status: 200, type: [Language] })
  @Get('/getAllActive')
  getAllActive() {
    return this.langService.getAllActive();
  }

  @Put('/:id')
  updateLanguage(@Body() dto: UpdateLanguageDto, @Param('id') id: number) {
    return this.langService.update(dto, id);
  }

  @Delete('/:id')
  deleteById(@Param('id') id: number) {
    return this.langService.deleteById(id);
  }
}
