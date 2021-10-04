import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Address } from './address.schema';

export type ClientDocument = Client & Document;

@Schema()
export class Client {
  @Prop()
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  lastname: string;

  @Prop({ required: true })
  identity: string;

  @Prop({ required: true })
  identityType: string;

  @Prop()
  phone: string;

  @Prop({ required: true })
  email: string;
  @Prop()
  addresses: Address[];
}

export const ClientSchema = SchemaFactory.createForClass(Client);
