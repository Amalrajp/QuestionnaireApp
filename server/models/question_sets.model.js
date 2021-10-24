let mongoose = require( 'mongoose' );

let questionSetSchema = new mongoose.Schema({
    setName: String,
    default: { type: Boolean, default: false }
})

const questionSets = mongoose.model('questionSets', questionSetSchema,'questionSets')
module.exports = questionSets;