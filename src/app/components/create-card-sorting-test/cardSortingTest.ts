import {Category} from './category'
import {Subject} from "./subject";
import {CardSortingResult} from "../perform-card-sorting-test/cardSortingResult";
import {User} from "../../../interfaces/user";

export interface CardSortingTest {
  categories : Category[]
  subjects : Subject[]
  results : CardSortingResult[]
  creator : User
}
