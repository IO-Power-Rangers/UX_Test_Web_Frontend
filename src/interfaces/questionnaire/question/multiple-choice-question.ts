import { MultipleChoiceQuestionOption } from './multiple-choice-question-option';

export interface MultipleChoiceQuestion {
    id: number
    content: string
    options: MultipleChoiceQuestionOption[]
}