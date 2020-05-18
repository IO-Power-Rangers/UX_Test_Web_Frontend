import { User } from "./user" 
import { Test } from './test';

export interface Recording{
    user : User;
    test : Test;
    video : String;
}