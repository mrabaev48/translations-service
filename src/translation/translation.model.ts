import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

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

  @ApiProperty({ example: 1, description: 'Id of language' })
  @ForeignKey(() => Translation)
  @Column({ type: DataType.INTEGER, allowNull: false })
  langId: number;
}
