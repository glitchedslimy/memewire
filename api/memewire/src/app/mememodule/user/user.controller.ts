import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { AuthGuard } from '@nestjs/passport'
import * as bcrypt from 'bcrypt'

@Controller('auth/users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    async createUser(
        @Body('username') username: string,
        @Body('password') password: string
    ) {
        const saltOrRounds = 10;
        const passwd = await bcrypt.hash(password, saltOrRounds)
        return this.userService.createUser(username, passwd)
    }

    @UseGuards(AuthGuard('jwt'))
    @Get()
    async getAllUsers() {
        return this.userService.getUsers();
    }
}