import { connection } from "../config";

export interface CreateUser {
    username: string;
    email: string;
    full_name?: string;
    password: string;
}

export class UserModel {
    constructor() {}
    
    createUser(user: CreateUser, callback: (err: any, results: any) => any, ) {
        connection.query("INSERT INTO users SET ?", user, callback)
    }
}
