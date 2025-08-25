import { NestMiddleware, Injectable, HttpException, HttpStatus, BadRequestException, NotFoundException } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { UserService } from "src/modules/user/user.service";


@Injectable()
export class UserExistsMiddleware implements NestMiddleware {

    constructor(
        private readonly userService: UserService

    ) { }


    async use(req: Request, res: Response, next: NextFunction) {

        const id = req.params.id || req.body.id || null;
        const user = await this.userService.getOne(id);

        if (!user) {
            throw new NotFoundException(`User with id = ${id} Not Found `);
        }
        next();
    }
}