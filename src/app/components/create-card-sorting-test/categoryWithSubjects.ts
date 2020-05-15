import {Category} from "./category";
import {CardSortingResult} from "./cardSortingResult";
import {Subject} from "./subject";

export interface CategoryWithSubjects {
  category : Category,
  result : CardSortingResult,
  subjects : Subject[]
}
