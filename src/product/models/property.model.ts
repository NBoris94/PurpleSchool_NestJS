import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument} from 'mongoose';

export type PropertyDocument = HydratedDocument<Property>

@Schema({ timestamps: true })
export class Property {
    @Prop()
    name: string;

    @Prop()
    value: string;
}

export const PropertySchema = SchemaFactory.createForClass(Property);