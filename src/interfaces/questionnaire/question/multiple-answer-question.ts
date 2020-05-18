import { MultipleAnswerQuestionOption } from './multiple-answer-question-option';

export interface MultipleAnswerQuestion {
    id?: number;
    content: string;
    options: MultipleAnswerQuestionOption[];
}
