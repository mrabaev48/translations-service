import { Module } from '@nestjs/common';
import { LanguageController } from './language.controller';
import { LanguageService } from './language.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Language } from './language.model';
import { Translation } from '../translation/translation.model';
import { LangTranslations } from '../lang-translations/lang-translations.model';

@Module({
  controllers: [LanguageController],
  providers: [LanguageService],
  imports: [
    SequelizeModule.forFeature([Language, Translation, LangTranslations]),
  ],
})
export class LanguageModule {}
