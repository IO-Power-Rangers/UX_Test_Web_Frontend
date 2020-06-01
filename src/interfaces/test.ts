import { Task } from './task';
import {Questionnaire} from './questionnaire/questionnaire';
import {UxModel} from "./uxModel";
import {User} from "./user";

export interface Test {
  id?: number;
  title: string;
  uxModel: UxModel;
  creator: User;
  tasks: Task[];
  questionnaire: Questionnaire;
}
