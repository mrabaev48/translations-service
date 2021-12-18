import { Module } from '@nestjs/common';
import { TranslationService } from './translation.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Translation } from './translation.model';
import { Language } from '../language/language.model';
import { LangTranslations } from '../lang-translations/lang-translations.model';
import { TranslationController } from './translation.controller';
import { LanguageModule } from '../language/language.module';

@Module({
  controllers: [TranslationController],
  providers: [TranslationService],
  imports: [
    SequelizeModule.forFeature([Translation, Language, LangTranslations]),
    LanguageModule,
  ],
})
export class TranslationModule {}
