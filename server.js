const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");


const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const MONGODB_URI = "mongodb+srv://doyle337:redrum33@cluster0.34awe.mongodb.net/<dbname>?retryWrites=true&w=majority"
mongoose.connect(MONGODB_URI || "mngodb://localhost/fitness", {
  useNewUrlParser: true,
  useFindAndModify: false

}, () => 
console.log("Connected to DB")
);

// routes
app.use(require("./routes/api-routes"));
app.use(require("./routes/html-routes"));

app.listen(PORT, () => {
  console.log(`🌎 App running on port ${PORT}!`);
});


