import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Language } from '../language/language.model';
import { LangTranslations } from '../lang-translations/lang-translations.model';

interface TranslationCreation {
  key: string;
  value: string;
  langId: number;
}

@Table({ tableName: 'Translations' })
export class Translation extends Model<Translation, TranslationCreation> {
  @ApiProperty({ example: 1, description: 'Primary key' })
  @Column({
    primaryKey: true,
    autoIncrement: true,
    unique: true,
    type: DataType.INTEGER,
  })
  id: number;

  @ApiProperty({
    example: 'auth.labels.email',
    description: 'Unique translation key',
  })
  @Column({ type: DataType.STRING, allowNull: false })
  key: string;

  @ApiProperty({ example: 'Email', description: 'Value' })
  @Column({ type: DataType.STRING, allowNull: false })
  value: string;

  @BelongsTo(() => Language, 'id')
  language;
}
