let Question = require( '../models/questions.model' )

exports.getQuestions = async function ( query ) {
    try {
        let result = await Question.find( query, {} )
        return result;
    } catch ( e ) {
        throw Error( 'Error while Fetching Questions' )
    }
}

exports.createQuestion = async function ( question ) {

    let newQuestion = new Question( {
        description: question.description,
        type: question.type,
        setID: question.setID
    } )

    try {
        let savedQuestion = await newQuestion.save()
        console.log(savedQuestion)
        return savedQuestion;
    } catch ( e ) {
        throw Error( "Error while Creating Question" )
    }
}

exports.insertQuestions = async function ( questions ) {
    try {
        let savedQuestion = await Question.insertMany(questions)
        return savedQuestion;
    } catch ( e ) {
        throw Error( "Error while Creating Question" )
    }
}

exports.updateQuestion = async function ( question ) {
    let id = question._id

    let oldQuestion={
        description:question.description,
        type:question.type,
        setID:question.setID
    }

    try {
        let savedQuestion = await Question.findOneAndUpdate({_id:id},oldQuestion)
        savedQuestion.description=oldQuestion.description
        savedQuestion.type=oldQuestion.type
        return savedQuestion;
    } catch ( e ) {
        throw Error( "And Error occured while updating the Question" );
    }
}

exports.deleteQuestion = async function ( id ) {

    try {
        let deleted = await Question.remove( { _id: id } )
        if ( deleted.n === 0 ) {
            throw Error( "Question Could not be deleted" )
        }
        return deleted
    } catch ( e ) {
        throw Error( "Error Occured while Deleting the Question" )
    }
}