import * as mongoose from 'mongoose'

export const UserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, require: true}
})