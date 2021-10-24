var QuestionService = require( '../services/question.service' )



exports.getQuestions = async function ( req, res, next ) {
    try {
        let questions = await QuestionService.getQuestions( {} )
        return res.status( 200 ).json( { status: 200, data: questions, message: "Succesfully Questions Recieved" } );
    } catch ( e ) {
        return res.status( 400 ).json( { status: 400, message: e.message } );
    }
}


exports.updateQuestion = async function ( req, res, next ) {
    if ( !req.body._id ) {
        try {
            let createdQuestion = await QuestionService.createQuestion( req.body )
            return res.status( 201 ).json( { status: 201, data: createdQuestion, message: "Succesfully Created Question" } )
        } catch ( e ) {
            return res.status( 400 ).json( { status: 400, message: e.message } )
        }
    }
    else {
        try {
            let updatedQuestion = await QuestionService.updateQuestion( req.body )
            return res.status( 200 ).json( { status: 200, data: updatedQuestion, message: "Succesfully Updated Question" } )
        } catch ( e ) {
            return res.status( 400 ).json( { status: 400., message: e.message } )
        }
    }   
}

exports.removeQuestion = async function ( req, res, next ) {
    let id = req.params.id;
    try {
        let deleted = await QuestionService.deleteQuestion( id )
        return res.status( 204 ).json( { status: 204, message: "Succesfully Question Deleted" } )
    } catch ( e ) {
        return res.status( 400 ).json( { status: 400, message: e.message } )
    }

}