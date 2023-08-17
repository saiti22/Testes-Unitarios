import { DBConnection } from "../database";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken' 
import { NotFoundError } from "../errors/not-found.error";

export class CreateSessionUsecase{
    constructor(private dbConnection: DBConnection){
        this.dbConnection = dbConnection
    }

    public async execute(username: string, password: string){
        const user = await this.dbConnection.users.findOne(username);

        if (!user) {
            throw new NotFoundError('User not found!')
        }

        const isPasswordMatching = await bcrypt.compare(
        password,
        user.password,
        );

        if (!isPasswordMatching) {
        return {
            message: 'Invalid password',
            statusCode: 401,
        }
        }

        const token = jwt.sign(
        { username: user.username },
        process.env.JWT_SECRET,
        { expiresIn: '1d' },
        );

        delete user.password;

        return {
        token,
        user,
        };
    }
}