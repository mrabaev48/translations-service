import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Translation } from '../translation/translation.model';
import { Language } from '../language/language.model';

@Table({ tableName: 'LangTranslations', createdAt: false, updatedAt: false })
export class LangTranslations extends Model<LangTranslations> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    unique: true,
    type: DataType.INTEGER,
  })
  id: number;

  @ForeignKey(() => Translation)
  @Column({ type: DataType.INTEGER })
  translationId: number;

  @ForeignKey(() => Language)
  @Column({ type: DataType.INTEGER })
  langId: number;
}
