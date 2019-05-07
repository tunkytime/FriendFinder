// DEPENDENCIES
var express = require("express");

// EXPRESS CONFIG
var app = express();

var PORT = process.env.PORT || 8000;

app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());
app.use(express.static("public"));

// ROUTER
require("./routing/htmlRoutes")(app);
require("./routing/apiRoutes")(app);

// LISTENER
app.listen(PORT, function () {
  console.log(`App listening on PORT: ${PORT}`);
});