import {CardSortingTest} from "./cardSortingTest";
import {CategoryWithSubjects} from "./categoryWithSubjects";

export interface Category {
  name : string
  categoriesWithSubjects : CategoryWithSubjects[]
}
