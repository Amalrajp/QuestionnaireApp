class Question {
    _id: string;
    type: string;
    description: string;
    setID: String;

    constructor(setID) {
        this.setID = setID
        this.type = ""
        this.description = ""
    }
}

export default Question;
