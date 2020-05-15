import {User} from "../../../interfaces/user";
import {CardSortingTest} from "./cardSortingTest";
import {CategoryWithSubjects} from "./categoryWithSubjects";

export interface CardSortingResult {
  test : CardSortingTest,
  user : User,
  categoriesWithSubject : CategoryWithSubjects[]
}
