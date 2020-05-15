import {Subject} from "../create-card-sorting-test/subject";

export interface CategoryWithSubjects {
  category : {id : bigint, name : string},
  subjects : Subject[]
}
