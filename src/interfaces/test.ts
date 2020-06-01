import { Task } from './task';
import {Questionnaire} from './questionnaire/questionnaire';
import {UxModel} from "./uxModel";

export interface Test {
  id?: number;
  title: string;
  uxModel: UxModel;
  tasks: Task[];
  questionnaire: Questionnaire;
}
