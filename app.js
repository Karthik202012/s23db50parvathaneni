var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const connectionString =process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var VegetablesRouter = require('./routes/Vegetables');
var boardRouter = require('./routes/board');
var selectorRouter = require('./routes/selector');
var resourceRouter = require('./routes/resource');
var Vegetables = require("./models/Vegetables");



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Vegetables', VegetablesRouter);
app.use('/board', boardRouter);
app.use('/selector', selectorRouter);
app.use('/resource', resourceRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});




// We can seed the collection if needed on server start
async function recreateDB() {
  // Delete everything
  await Vegetables.deleteMany();
  let instance1 = new Vegetables({ Vegetable_name: "Tomato", vegetable_price: "10", Vegetable_colour: "red" });
  let instance2 = new Vegetables({ Vegetable_name: "Potato", vegetable_price: "7", Vegetable_colour: "brown" });
  let instance3 = new Vegetables({ Vegetable_name: "Cabbage", vegetable_price: "5", Vegetable_colour: "Green" });
  instance1.save().then(() => { console.log('First Object is created'); }).catch((e) => { console.log('There was an error', e.message); });
  instance2.save().then(() => { console.log('Second Object is created'); }).catch((e) => { console.log('There was an error', e.message); });
  instance3.save().then(() => { console.log('Third Object is created'); }).catch((e) => { console.log('There was an error', e.message); });
}
let reseed = true;
if (reseed) { recreateDB(); }


module.exports = app;