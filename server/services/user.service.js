let User = require( '../models/users.model' )

exports.getUser = async function ( query ) {
    try {
        let result = await User.findOne( query, {} )
        return result;
    } catch ( e ) {
        throw Error( 'Error while Fetching User' )
    }
}