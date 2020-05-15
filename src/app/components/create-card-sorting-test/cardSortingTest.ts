import {Category} from './category'
import {Subject} from "./subject";
import {CardSortingResult} from "./cardSortingResult";

export interface CardSortingTest {
  categories : Category[]
  subjects : Subject[]
  results : CardSortingResult[]
}
