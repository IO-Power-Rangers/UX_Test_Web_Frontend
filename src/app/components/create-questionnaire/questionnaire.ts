import { TextQuestion } from './text-question';
import { MultipleChoiceQuestion } from './multiple-choice-question';

export interface Questionnaire {
    name: string
    textQuestions: TextQuestion[]
    multipleChoiceQuestions: MultipleChoiceQuestion[]
}