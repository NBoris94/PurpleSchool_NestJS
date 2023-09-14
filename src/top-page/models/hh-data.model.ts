import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument} from 'mongoose';

export type HhDataDocument = HydratedDocument<HhData>;
@Schema()
export class HhData {

    @Prop()
    count: number;

    @Prop()
    juniorSalary: number;

    @Prop()
    middleSalary: number;

    @Prop()
    seniorSalary: number;
}

export const HhDataSchema = SchemaFactory.createForClass(HhData)
