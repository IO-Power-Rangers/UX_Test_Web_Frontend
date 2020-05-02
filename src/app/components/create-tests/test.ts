import { Task } from "./task"
import { UxModel } from "./uxModel";

export interface Test {
  uxModel : UxModel
  title : string
  tasks : Task[]
}
