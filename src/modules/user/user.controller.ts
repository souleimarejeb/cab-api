import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserEntity } from 'src/database/models/user.entity';
import { UserService } from './user.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';


@ApiTags('USERS MGMT')
@Controller({ version: '1', path: 'user' })
export class UserController {

    constructor(private readonly userService: UserService) { }

    @Post()
    @ApiBody({ type: UserEntity })
    create(@Body() paylaod: Partial<UserEntity>) {
        return this.userService.create(paylaod);
    }

    @Get(':id')
    getOne(@Param('id') id: string,) {
        return this.userService.getOne(id);
    }

    @Get()
    getAll() {
        return this.userService.getAll();
    }

    @Put(':id')
    @ApiBody({ type: UserEntity })
    update(
        @Body() payload: Partial<UserEntity>,
        @Param('id') id: string
    ) {
        return this.userService.update(id, payload);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.userService.delete(id);
    }

}
