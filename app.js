// All Requires
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// All Requires For The Routing Section
var adminRouter = require("./routes/adminRouter");
var mentorRouter = require("./routes/mentorRouter");
var mentorCrud = require("./routes/crudOperationRouter");
var taskAssignment = require("./routes/taskAssignmentRouter");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

// Mounting The Express Application
var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Adding The Webpack Configuration
if (process.env.NODE_ENV === "development") {
  var webpack = require("webpack");
  var webpackConfig = require("./webpack.config");
  var compiler = webpack(webpackConfig);

  app.use(
    require("webpack-dev-middleware")(compiler, {
      noInfo: true,
      publicPath: webpackConfig.output.publicPath
    })
  );

  app.use(require("webpack-hot-middleware")(compiler));
}

// Connecting To Db Locally
mongoose.connect(
  "mongodb://localhost:27017/MERN_TASKS",
  { useNewUrlParser: true },
  err => {
    if (err) {
      console.log(err, "Not Connected To DB");
    } else {
      console.log("Connected Sucessfully TO DB");
      require("./utils/seed");
    }
  }
);

// Providing The Api Paths
app.use("/api/v1/mentor", mentorRouter);
app.use("/api/v1/admin", adminRouter);
app.use("/api/v1/mentorCrud", mentorCrud);
app.use("/api/v1/task", taskAssignment);
app.use("/users", usersRouter);
app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// Exporting The Server File
module.exports = app;
