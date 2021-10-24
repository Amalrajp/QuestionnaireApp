const mongoose = require( 'mongoose' );
const bcrypt = require( 'bcryptjs' );
const jwt = require( 'jsonwebtoken' );

var userSchema = new mongoose.Schema( {
    username: {
        type: String,
        required: 'Full name can\'t be empty',
        unique: true,
    },    
    role: String,    
    password: String,
    saltSecret: String,
} );

// Events
userSchema.pre( 'save', function ( next ) {
    bcrypt.genSalt( 10, ( err, salt ) => {
        bcrypt.hash( this.password, salt, ( err, hash ) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        } );
    } );
} );



// Methods
userSchema.methods.verifyPassword = function ( password ) {
    return bcrypt.compareSync( password, this.password );
};

userSchema.methods.generateJwt = function () {
    return jwt.sign( { username: this.username, role: this.role },
        "SECRET#123",
        {
            expiresIn:"2m"
        } );
}
const user = mongoose.model( 'users', userSchema )
module.exports = user;
