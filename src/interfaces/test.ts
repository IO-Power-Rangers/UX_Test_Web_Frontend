import { Task } from './task';

export interface Test {
  id?: number;
  title: string;
  axLink: string;
  tasks: Task[];
}
