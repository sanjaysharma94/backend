const express = require("express")
const mongoose = require("mongoose");
const userRoutes = require("../Routes/userRoute")

const app = express();
const port = process.env.PORT || 4000;
app.use(express.json());

app.use("/", userRoutes)

mongoose.connect(process.env.URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log(" database Connected successfully");
});

app.listen(4000, ()=>{
    console.log("server is listening at ${port}")
})
