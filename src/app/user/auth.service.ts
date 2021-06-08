import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()
export class AuthService {
    constructor() { }
    
    curretUser!: IUser;
    loginUser(userName: string, password: string){
        this.curretUser ={
            id: 1,
            firstName: 'John',
            lastname: 'Papa',
            userName: userName
        }
    }

    isAuthenticated(){
        return !!this.curretUser;
    }

    updateCurrentUser(firstName:string, lastName: string){
        this.curretUser.firstName = firstName
        this.curretUser.lastname = lastName
    }
    
}