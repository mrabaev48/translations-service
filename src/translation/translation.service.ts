import { Injectable } from '@nestjs/common';
import { CreateTranslationDto } from './dto/create-translation.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Translation } from './translation.model';
import { LanguageService } from '../language/language.service';

@Injectable()
export class TranslationService {
  constructor(
    @InjectModel(Translation) private translationRepository: typeof Translation,
    private languageService: LanguageService,
  ) {}

  async createTranslation(dto: CreateTranslationDto) {
    const translation = await this.translationRepository.create(dto);
    const lang = await this.languageService.getLangById(dto.langId);
    await translation.$set('language', [lang.id]);
    return translation;
  }

  async getAll() {
    return await this.translationRepository.findAll({
      include: {
        all: true,
      },
    });
  }

  async getByKey(translationKey: string) {
    return await this.translationRepository.findAll({
      where: {
        key: translationKey,
      },
      include: {
        all: true,
      },
    });
  }

  async getByKeyAndLangId(translationKey: string, langId: number) {
    return await this.translationRepository.findAll({
      where: {
        key: translationKey,
      },
    });
  }
}
