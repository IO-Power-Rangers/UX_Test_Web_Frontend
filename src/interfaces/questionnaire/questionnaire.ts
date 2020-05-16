import { TextQuestion } from './question/text-question';
import { MultipleChoiceQuestion } from './question/multiple-choice-question';
import { MultipleAnswerQuestion } from './question/multiple-answer-question';
import { LikertScaleQuestion } from './question/likert-scale-question';

export interface Questionnaire {
    id: number
    name: string
    textQuestions: TextQuestion[]
    multipleChoiceQuestions: MultipleChoiceQuestion[]
    multipleAnswerQuestions: MultipleAnswerQuestion[]
    likertScaleQuestions: LikertScaleQuestion[]
}