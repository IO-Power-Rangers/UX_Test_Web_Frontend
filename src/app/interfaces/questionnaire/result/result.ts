export interface Result {
    type: QuestionType
    question: String,
}

export interface LikertScaleResult extends Result {
    answers: Map<Number, number>
}

export interface MultipleAnswerResult extends Result {
    answers: Map<String, number>
}

export interface MultipleChoiceResult extends Result {
    answers: Map<String, number>
}

export interface TextResult extends Result {
    answers: Array<String>
}

export enum QuestionType {
    LIKERT_SCALE, MULTIPLE_CHOICE, MULTIPLE_ANSWER, TEXT
}

export interface ExcelExport {
    base64StringFile: string
    fileName: string,
}