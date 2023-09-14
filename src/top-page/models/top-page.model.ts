import {HydratedDocument} from 'mongoose';
import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HhData, HhDataSchema} from './hh-data.model';
import {Advantage, AdvantageSchema} from './advantage.model';

export type TopPageDocument = HydratedDocument<TopPage>;

export enum TopLevelCategory {
    Courses,
    Services,
    Books,
    Products
}

@Schema({ timestamps: true })
export class TopPage {

    @Prop({ enum: TopLevelCategory })
    firstCategory: TopLevelCategory;

    @Prop()
    secondCategory: string;

    @Prop({ unique: true })
    alias: string;

    @Prop()
    title: string;

    @Prop()
    category: string;

    @Prop({ type: () => HhDataSchema})
    hh?: HhData;

    @Prop({ type: () => [AdvantageSchema]})
    advantages: Advantage[];

    @Prop()
    seoText: string;

    @Prop()
    tagsTitle: string;

    @Prop([String])
    tags: string[];
}

export const TopPageSchema = SchemaFactory.createForClass(TopPage);
TopPageSchema.index({ '$**': 'text' });
