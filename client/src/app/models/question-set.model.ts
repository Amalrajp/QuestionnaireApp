import Question from "./question.model";

class QuestionSet {
    _id: string;
    setName: string;
    default: boolean;
    questions: Question[];

    constructor() {
        this.setName = ""
        this.default = false
        this.questions = [];
    }
}

export default QuestionSet;