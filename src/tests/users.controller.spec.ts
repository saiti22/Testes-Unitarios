import { UsersController } from "../controllers/users.controller";
import { database } from '../database'
import { User } from "../models/user.model";
import { CreateUserUseCaseExecute, CreateUserUsecase } from "../usecases/create-user.usecase";

describe("UsersController", () => {
    it("Deve ser capaz de criar um usuário", async() => {
        const dbconnection = database.getConnection()
        
        const user = await CreateUserUseCaseExecute('igor', 'senha123', dbconnection)
        
        expect((user as User).username).toBe('igor')
    })

    // it("Deve ser capaz de criar um usuário CLASSE", async() =>{
    //     const dbconnection = database.getConnection()

    //     const createUser = new CreateUserUsecase(dbconnection)

    //     const user = await createUser.execute('igor', 'senha123')

    //     expect((user as User).username).toBe('igor')
    // })
})