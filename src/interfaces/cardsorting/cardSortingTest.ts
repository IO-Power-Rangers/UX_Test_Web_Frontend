import {Category} from './category'
import {Subject} from "./subject";
import {CardSortingResult} from "./cardSortingResult";
import {User} from "../user";

export interface CardSortingTest {
  categories : Category[]
  subjects : Subject[]
  results : CardSortingResult[]
  creator : User
}
