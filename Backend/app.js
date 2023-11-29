const express =  require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors  = require("cors");
const app = express();

//Middleware
app.use(express.json());
app.use(cors());
app.use("/books", router)

mongoose.connect("mongodb+srv://mehak0877be21:Mehak132003@cluster0.cxcdtmk.mongodb.net/bookstore?retryWrites=true&w=majority"
).then(() => console.log("Connected to database"))
.then(() => {
    app.listen(5000);
}).catch((err) => console.log(err));
