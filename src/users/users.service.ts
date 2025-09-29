import { Injectable, ConflictException,} from '@nestjs/common'
import {PrismaService} from '../prisma/prisma.service'
import {CreateUserDto} from './dto/create-user.dto'
import {User} from './entities/user.entity'
import * as bcrypt from 'bcrypt'

@Injectable()
export class UsersService {
    constructor(private prisma: PrismaService) {}   
    async create(createUserDto: CreateUserDto): Promise<Omit<User, 'password'>> {
        const existingUser = await this.prisma.user.findUnique({
            where: { email: createUserDto.email },
        });

        if (existingUser) {
            throw new ConflictException('usuario ja existe ');
        }
        const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
        const user = await this.prisma.user.create({
            data: {
                ...createUserDto,
                password: hashedPassword,
            },
        });

        // remover a senha antes do retorno
        const { password, ...result } = user;
        return result;
    }
    async findByemail(email:string){
        return this.prisma.user.findUnique({
            where:{email},
        });
    }
}
    