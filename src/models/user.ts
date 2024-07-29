import { Schema, model } from "mongoose";
import { User } from "../interfaces/user";

export const UserSchema = new Schema<User>({
    name: { type: String, required: true },
    foto: { type: String, required: true },
    startDate: { type: Date, required: true },
    description: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: String, required: true },
    status: { type: String, enum: ["ACTIVE", "INACTIVE"], required: true }



});

export const UserModel = model<User>('User', UserSchema);