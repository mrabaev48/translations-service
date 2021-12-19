import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Language } from './language.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { TranslationService } from '../translation/translation.service';

@Injectable()
export class LanguageService {
  constructor(
    @InjectModel(Language) private languageRepository: typeof Language,
    private translationService: TranslationService,
  ) {}

  async create(dto: CreateLanguageDto) {
    return await this.languageRepository.create(dto);
  }

  async getByIdOrThrowNotFound(id: number) {
    const lang = await this.languageRepository.findByPk(id);

    if (!lang) {
      throw new HttpException(
        `Language with id = ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }

    return lang;
  }

  async getAll() {
    return this.languageRepository.findAll();
  }

  async getAllActive() {
    return this.languageRepository.findAll({ where: { isActive: true } });
  }

  async update(dto: UpdateLanguageDto, id: number) {
    const lang = await this.getByIdOrThrowNotFound(id);

    if (dto.langName) {
      lang.langName = dto.langName;
    }

    if (dto.langAbbreviation) {
      lang.langAbbreviation = dto.langAbbreviation;
    }

    if (dto.isActive) {
      lang.isActive = dto.isActive;
    }
  }

  async deleteById(id: number) {
    await this.getByIdOrThrowNotFound(id);

    await this.languageRepository.destroy({
      where: {
        id,
      },
    });

    await this.translationService.deleteByLangId(id);

    return HttpStatus.OK;
  }
}
