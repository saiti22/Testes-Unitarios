import { UsersController } from "../controllers/users.controller";
import { database } from '../database'

describe("UsersController", () => {
    it("Deve ser capaz de criar um usuário", () => {
        const dbconnection = database.getConnection()
        const usersController = new UsersController(dbconnection)
        
        usersController.create()
    })
})