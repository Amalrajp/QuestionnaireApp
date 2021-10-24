// set up ======================================================================
let express = require( 'express' );
let app = express();
let mongoose = require( 'mongoose' ); 					// mongoose for mongodb
let port = process.env.PORT || 8088; 				    // set the port
let database = require( '../config/database' );  		// load the database config
let path = require( 'path' );

let questions = require( './routes/questions.route' );        //load routes
let questionSets = require( './routes/question_sets.route' )
let user = require( './routes/user.route' )

// db connection ===============================================================
mongoose.set('useFindAndModify', false);
mongoose.connect( database.url, { useNewUrlParser: true, useUnifiedTopology: true } );
let db = mongoose.connection;
db.on( 'error', () => console.log( 'DB disconnected due to error' ) );
db.once( 'open', () => console.log( 'DB Connected!' ) );


// routes & apis =============================================================
app.use( express.json() );
// app.use( express.static( '../dist/' ) );
// app.use( '/', [ express.static( path.join( __dirname, '../dist/EMAS' ) ) ] );

app.use( '/api/questions', questions );
app.use( '/api/sets', questionSets );
app.use( '/api/user', user );


// app.get( '*', function ( req, res ) {
//     return res.sendFile( path.join( __dirname, '../dist/EMAS/index.html' ) )
// } )

// start listening =============================
app.listen( port );
console.log( "App listening on port " + port );
