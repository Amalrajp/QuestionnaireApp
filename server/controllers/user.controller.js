var UserService = require( '../services/user.service' );
const jwt = require( 'jsonwebtoken' );

module.exports.authenticate = async ( req, res, next ) => {
    let token;
    let user = await UserService.getUser( { username: req.body.username } );
    if ( !user ) res.status( 401 ).json( { message: "User not registered." } );
    else {
        let isValid = user.verifyPassword( req.body.password )
        if ( isValid ) {
            token = user.generateJwt()
            res.send( { status: 200, data: token, message: "User logged in successfully" } )
        }
        else {
            res.status( 401 ).json( { message: "Incorrect username/password." } )
        }
    }

}