import {Schema} from 'mongoose';

const UserModel = new Schema({
    name:{
        type: String,
        required: true,
        maxlength: 30,
    },
    email: {
        type: String,
        required: true,
        maxlength: 50,
        validate: RegExp(''),
    },
    password: {
        type: String,
        required: true,
    },
})