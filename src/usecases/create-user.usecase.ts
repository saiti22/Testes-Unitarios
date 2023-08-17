import { DBConnection } from "../database";
import { User } from "../models/user.model";
import bcrypt from 'bcrypt';

export async function CreateUserUseCaseExecute(username: string, password: string, dbconnection: DBConnection){
    const userWithSameUsername = await dbconnection.users.findOne(username);

        if (userWithSameUsername) {
            return ({
              message: 'User already exists',
              statusCode: 409,
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            username,
            password: hashedPassword,
        });

        await dbconnection.users.create(user);

        return user;
}
