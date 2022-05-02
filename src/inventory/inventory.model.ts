import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type InventoryDocument = Inventory & Document;

@Schema()
export class Inventory {
    @Prop()
    name: string

    @Prop()
    qty: number

    @Prop()
    description: string

    @Prop()
    createdAt: Date
    
    @Prop()
    updatedAt: Date
}

export const InventorySchema = SchemaFactory.createForClass(Inventory);