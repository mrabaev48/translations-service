import { Injectable } from '@nestjs/common';
import { Language } from './language.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateLanguageDto } from './dto/create-language.dto';

@Injectable()
export class LanguageService {
  constructor(
    @InjectModel(Language) private languageRepository: typeof Language,
  ) {}

  async createLang(dto: CreateLanguageDto) {
    return await this.languageRepository.create(dto);
  }

  async getLangById(id: number) {
    return await this.languageRepository.findByPk(id);
  }

  async getAllLangs() {
    return this.languageRepository.findAll();
  }

  async getAllActiveLangs() {
    return this.languageRepository.findAll({ where: { isActive: true } });
  }
}
