import { Module } from '@nestjs/common';
import { TranslationController } from './translation.controller';
import { TranslationService } from './translation.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Translation } from './translation.model';
import { Language } from '../language/language.model';
import { LangTranslations } from '../lang-translations/lang-translations.model';

@Module({
  controllers: [TranslationController],
  providers: [TranslationService],
  imports: [
    SequelizeModule.forFeature([Translation, Language, LangTranslations]),
  ],
})
export class TranslationModule {}
