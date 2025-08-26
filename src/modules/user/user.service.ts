
import { Injectable, NotFoundException } from '@nestjs/common';
import { UserEntity } from 'src/database/models/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) { }

    async create(payload: Partial<UserEntity>): Promise<UserEntity> {
        try {
            const newUser = this.userRepository.create({
                ...payload
            })
            return await this.userRepository.save(newUser)
        } catch (error) {
            throw error;
        }
    }

    async getAll(): Promise<UserEntity[]> {
        try {
            return await this.userRepository.find();
        } catch (error) {
            throw error
        }
    }

    async getOne(id: string): Promise<UserEntity> {
        try {
            const user = await this.userRepository.findOne({ where: { id } });
            if (!user) {
                throw new NotFoundException(`User with ID ${id} not found`)
            };
            return user;
        } catch (error) {
            throw error
        }
    }

    async update(id: string, payload: Partial<UserEntity>) {
        try {
            const user = await this.getOne(id);
            if (user) {
                await this.userRepository.update(
                    { id },
                    { ...payload }
                )
            }
        } catch (error) {
            throw error;
        }
    }

    async delete(id: string) {
        try {
            const user = await this.getOne(id);
            await this.userRepository.delete({ id });
            return { deleted: true }

        } catch (error) {
            throw error;
        }
    }
}
