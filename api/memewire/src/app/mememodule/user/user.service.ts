import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose'
import { Model } from "mongoose";
import { IUser } from '../../shared'
@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<IUser>) {}

    async createUser(username: string, password: string): Promise<IUser> {
        return this.userModel.create({
            username,
            password
        })
    }
    async getUsers(): Promise<IUser[]> {
        return this.userModel.find().exec()
    }

    async getUser({username}): Promise<IUser | undefined> {
        return this.userModel.findOne({
            username
        })
    }
}