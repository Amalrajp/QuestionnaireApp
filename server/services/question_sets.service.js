let QuestionSet = require( '../models/question_sets.model' )

exports.getSets = async function ( query ) {
    try {

        let result = await QuestionSet.aggregate( [
            {
                '$lookup': {
                    'from': 'questions',
                    'localField': '_id',
                    'foreignField': 'setID',
                    'as': 'questions'
                }
            }
        ] )
        // let result = await QuestionSet.find({} )
        return result;
    } catch ( e ) {
        throw Error( 'Error while Fetching Question Sets' )
    }
}

exports.createSet = async function ( set ) {
    let newQuestion = new QuestionSet( {
        setName: set.setName
    } )

    try {
        let savedQuestion = await newQuestion.save()
        return savedQuestion;
    } catch ( e ) {
        throw Error( "Error while Creating Question" )
    }
}
