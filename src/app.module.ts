import { Module } from '@nestjs/common';
import { LanguageModule } from './language/language.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { Language } from './language/language.model';
import { TranslationModule } from './translation/translation.module';
import { Translation } from './translation/translation.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [Language, Translation],
      autoLoadModels: true,
    }),
    LanguageModule,
    TranslationModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
