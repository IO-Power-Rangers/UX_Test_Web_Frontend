import {Subject} from "./subject";

export interface CategoryWithSubjects {
  category : {id : bigint, name : string},
  subjects : Subject[]
}
