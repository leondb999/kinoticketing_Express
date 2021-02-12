var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// import aus Route Folder
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var catalogRouter = require('./routes/catalog');  //Import routes for "catalog" area of site


var app = express();

//---- view engien --- hat Leon selbst geadded beim ausprobieren
app.set('view engine', 'ejs')


//-----------------------Mongo DB Datenbank ------------
var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://kinoadmin:1234KinoLeonNico5678@cluster0.utbum.mongodb.net/Kinoticketing-DB?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//-----------------------------------------


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/catalog', catalogRouter);  // Add catalog routes to middleware chain.

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//                  Leon Test !!
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//------------------------------TEST Ob ich daten von mongodb bekomme oder nicht ----------------------

app.get('/person_list', (req, res)=>{
  let persons_lists = [{'name':"Leon"}, {'name':"Nicolas"},{'name': "Niklas"}]
  res.render('person_list', {'persons_list': persons_lists})
})


//-------------------------------------------------------------------------------------------------
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
