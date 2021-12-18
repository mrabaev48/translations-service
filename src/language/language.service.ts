import { Injectable } from '@nestjs/common';
import { Language } from './language.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateLanguageDto } from "./dto/create-language.dto";

@Injectable()
export class LanguageService {
  constructor(
    @InjectModel(Language) private languageRepository: typeof Language,
  ) {}

  async createLang(dto: CreateLanguageDto) {
    const lang = await this.languageRepository.create(dto);
    return lang;
  }

  async getAllLangs() {
    return this.languageRepository.findAll();
  }

  async getAllActiveLangs() {
    return this.languageRepository.findAll({ where: { isActive: true}})
  }
}
