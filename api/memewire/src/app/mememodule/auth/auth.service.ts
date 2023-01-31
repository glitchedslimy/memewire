import { Injectable } from "@nestjs/common";
import { UserService } from "../user/user.service";
import { JwtService } from '@nestjs/jwt'
import * as bcrypt from 'bcrypt';
import { IUser } from "../../shared";

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {}

    async validateUserCredentials(
        username: string,
        password: string
    ): Promise<any> {
        const user = await this.userService.getUser({ username }) as Partial<IUser>;
        if(user) {
            if(await bcrypt.compare(password, user.password as string)) {
                delete user.password;
                return user
            }
            return null
        }
    }

    async loginWithCredentials(user: any) {
        const payload = { username: user.username };

        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}