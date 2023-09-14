import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument} from 'mongoose';

export type AdvantageDocument = HydratedDocument<Advantage>;
@Schema()
export class Advantage {

    @Prop()
    title: string;

    @Prop()
    description: string;
}

export const AdvantageSchema = SchemaFactory.createForClass(Advantage)