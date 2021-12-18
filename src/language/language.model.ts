import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Translation } from '../translation/translation.model';
import { LangTranslations } from '../lang-translations/lang-translations.model';

interface LanguageCreation {
  langName: string;
  langAbbreviation: string;
}

@Table({ tableName: 'Languages' })
export class Language extends Model<Language, LanguageCreation> {
  @ApiProperty({ example: 1, description: 'Primary key' })
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
    unique: true,
  })
  id: number;

  @ApiProperty({ example: 'English', description: 'Language name' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  langName: string;

  @ApiProperty({ example: 'en', description: 'Language abbreviation' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  langAbbreviation: string;

  @ApiProperty({ example: true, description: 'Is language active' })
  @Column({ type: DataType.BOOLEAN, allowNull: false, defaultValue: true })
  isActive: boolean;

  @BelongsToMany(() => Translation, () => LangTranslations)
  translations: Translation[];
}
