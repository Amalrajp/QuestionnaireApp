let mongoose = require( 'mongoose' );

let questionsSchema = new mongoose.Schema( {
    setID:mongoose.Schema.ObjectId,
    description: String,
    type: String
} )

const questions = mongoose.model( 'questions', questionsSchema )

module.exports = questions;