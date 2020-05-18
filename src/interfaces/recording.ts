import { User } from "./user" 
import { Test } from 'src/app/components/create-tests/test';

export interface Recording{
    user : User;
    test : Test;
    video : String;
}