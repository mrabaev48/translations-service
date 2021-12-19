import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Translation } from './translation.model';
import { TranslationDto } from './dto/translation.dto';

@Injectable()
export class TranslationService {
  constructor(
    @InjectModel(Translation) private translationRepository: typeof Translation,
  ) {}

  async create(dto: TranslationDto) {
    return await this.translationRepository.create(dto);
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
        langId: langId,
      },
    });
  }

  async update(dto: TranslationDto, id: number) {
    const translation = await this.translationRepository.findByPk(id);

    if (!translation) {
      throw new HttpException(
        `Translation with id = ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }

    if (dto.key) {
      translation.key = dto.key;
    }

    if (dto.value) {
      translation.value = dto.value;
    }

    if (dto.langId && dto.langId > 0) {
      translation.langId = dto.langId;
    }

    return await translation.save();
  }

  async deleteByLangId(langId: number) {
    return await this.translationRepository.destroy({
      where: {
        langId,
      },
    });
  }
}
