import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Client } from './client.schema';
import * as mongoose from 'mongoose';

export type AddressDocument = Address & Document;

@Schema()
export class Address {
  @Prop()
  id: string;

  @Prop({ required: true })
  streetName: string;

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  state: string;

  @Prop({ required: true })
  country: string;

  @Prop()
  zipCode: string;

  @Prop()
  aptNumber: string;
}

export const ClientSchema = SchemaFactory.createForClass(Address);
