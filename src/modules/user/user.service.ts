
import { ForbiddenException, Injectable } from '@nestjs/common';
import { UserEntity } from 'src/database/models/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, TypeORMError } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) { }

    async create(payload: Partial<UserEntity>): Promise<UserEntity> {
        // try {
            const newUser = this.userRepository.create({
                ...payload
            })
            return await this.userRepository.save(newUser)
        // } catch (error) {
        //     if (error instanceof TypeORMError)
        //         throw new ForbiddenException('Credentials taken');
        // }
    }

    async getAll(): Promise<UserEntity[]> {
            return await this.userRepository.find();
    }

    async getOne(id: string): Promise<UserEntity | null> {
        
        const staff = await this.userRepository.findOne({ where: { id } });
        return staff;
    }

    async update(id: string, payload: Partial<UserEntity>) {
            await this.userRepository.update(
                { id },
                { ...payload }
            )
    }

    async delete(id: string) {
            await this.userRepository.delete({ id });
    }
}
