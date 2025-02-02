import { Schema, model } from 'mongoose';

const userSchema = {
    email: String,
    passowrd: String
}

const User = model('User', userSchema);

export default User;