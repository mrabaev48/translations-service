import { Injectable } from '@nestjs/common';
import { CreateTranslationDto } from './dto/create-translation.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Translation } from './translation.model';

@Injectable()
export class TranslationService {
  constructor(
    @InjectModel(Translation) private translationRepository: typeof Translation,
  ) {}
  async createTranslation(dto: CreateTranslationDto) {
    console.log('test');
    return await this.translationRepository.create(dto);
  }

  async getAll() {
    return await this.translationRepository.findAll();
  }

  async getByKey(translationKey: string) {
    return await this.translationRepository.findAll({
      where: {
        key: translationKey,
      },
    });
  }
}
