let QuestionSetService = require( '../services/question_sets.service' )
var QuestionService = require( '../services/question.service' )

exports.getSets = async function ( req, res, next ) {
    try {
        let questions = await QuestionSetService.getSets( {} )
        return res.status( 200 ).json( { status: 200, data: questions, message: "Succesfully Question Sets Recieved" } );
    } catch ( e ) {
        return res.status( 400 ).json( { status: 400, message: e.message } );
    }
}

exports.createSet = async function ( req, res, next ) {

    try {
        let newSet = await QuestionSetService.createSet( req.body )
        let newQuestions = req.body.questions.map( q => {
            return { ...q, setID: newSet._id }
        } )
        let questionResult = await QuestionService.insertQuestions( newQuestions )
        return res.status( 200 ).json( { status: 200, data: newSet, message: "Succesfully Updated Question" } )
    } catch ( e ) {
        return res.status( 400 ).json( { status: 400., message: e.message } )
    }

}