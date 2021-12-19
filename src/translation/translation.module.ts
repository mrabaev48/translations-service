import { Module } from '@nestjs/common';
import { TranslationService } from './translation.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Translation } from './translation.model';
import { Language } from '../language/language.model';
import { TranslationController } from './translation.controller';

@Module({
  controllers: [TranslationController],
  providers: [TranslationService],
  imports: [SequelizeModule.forFeature([Translation, Language])],
  exports: [TranslationService],
})
export class TranslationModule {}
