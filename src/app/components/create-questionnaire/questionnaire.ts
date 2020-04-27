import { Question } from './question';

export interface Questionnaire {
    name: string
    questions: Question[]
}