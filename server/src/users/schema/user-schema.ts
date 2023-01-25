import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type UserDocument = User & Document;
@Schema({ collection: 'users' })
export class User {
  @Prop()
  name: string;
  @Prop()
  email: string;
  @Prop()
  hobby: string;
  @Prop()
  phone: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
