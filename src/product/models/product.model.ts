import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Property, PropertySchema} from './property.model';

export type ProductDocument = HydratedDocument<Product>

@Schema({ timestamps: true })
export class Product {

    @Prop()
    image: string;

    @Prop()
    title: string;

    @Prop()
    price: number;

    @Prop()
    oldPrice?: number;

    @Prop()
    creditPrice: number;

    @Prop()
    description: string;

    @Prop()
    advantages: string;

    @Prop()
    disAdvantages: string;

    @Prop([String])
    categories: string[];

    @Prop([String])
    tags: string[];

    @Prop({ type: () => [PropertySchema], _id: false })
    properties: Property[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
