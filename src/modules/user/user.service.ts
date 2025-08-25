
import { ForbiddenException, Injectable, InternalServerErrorException } from '@nestjs/common';
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
        try {
            const newUser = this.userRepository.create({
                ...payload
            })
            return await this.userRepository.save(newUser)
        } catch (error) {
            if (error instanceof TypeORMError)
                throw new ForbiddenException('Credentials taken');
        }
    }

    async getAll(): Promise<UserEntity[]> {
        try {
            return await this.userRepository.find();
        }
        catch (error) {
            throw new InternalServerErrorException('Failed to retrieve users');
        }
    }

    async getOne(id?: string, email?: string): Promise<UserEntity | null> {

        let staff: UserEntity | null;
        if (id) {
            staff = await this.userRepository.findOne({ where: { id } });
        } else if (email) {
            staff = await this.userRepository.findOne({ where: { email } });
        }

        return staff;
    }

    async update(id: string, payload: Partial<UserEntity>) {
        try {
            await this.userRepository.update(
                { id },
                { ...payload }
            )
        } catch (error) {
            if (error instanceof TypeORMError)
                throw new ForbiddenException('Database operation failed, duplicate found ');
            throw error;
        }
    }

    async delete(id: string) {

        try {
            await this.userRepository.delete({ id });
        } catch (error) {
            if (error instanceof TypeORMError)
                throw new ForbiddenException('Database operation failed');
            throw error;
        }
    }
}
