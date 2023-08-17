import { DBConnection } from "../../database";
import { User } from "../../models/user.model";
import { CreateUserUseCaseExecute } from "../create-user.usecase";

async function findOne(_: string){
    return null;
}

async function create(_: User) {
    return null;
}

const users = {
    findOne,
    create
}

const mockDBConnection = ({
    users, 
} as unknown) as DBConnection; // também pode ser "as any" ao invés de "unknown) as DBConnection"

describe("UsersController", () => {
    it("Deve ser capaz de criar um usuário", async() => {        
        const user = await CreateUserUseCaseExecute('igor', 'senha123', mockDBConnection)
        
        expect((user as User).username).toBe('igor')
    })

})