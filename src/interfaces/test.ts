import { Task } from './task';
import {Questionnaire} from './questionnaire/questionnaire';

export interface Test {
  id?: number;
  title: string;
  axLink: string;
  tasks: Task[];
  questionnaire: Questionnaire;
}
