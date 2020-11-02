import {User} from './users';
export interface Register {
    status:boolean;
    message:string;
    user?:User
}

export interface RegisterData {
    name:string;
    email:string;
    password:string;
}