const express = require("express");
const cors = require("cors");
const userRoutes  = require('./routes/users');
const sellerRoutes  = require('./routes/seller');
const adminRoutes  = require('./routes/admin');
const productRoutes  = require('./routes/product');

const morgan = require("morgan");
const dotenv = require("dotenv");


const db = require('./db')




const app = express();
app.use(cors());
const port = process.env.PORT || 3000;
// Load ENV variable
dotenv.config({ path: "./config/config.env" });
app.use(express.json());

app.use(morgan('dev'));


// Setup static files path
app.use("/uploads", express.static("uploads"));
//app.use("/uploadedfiles", express.static("uploadedfiles"));

// Mount Routes
app.use('/api', userRoutes)
app.use('/api', sellerRoutes)
app.use('/api', adminRoutes)
app.use('/api', productRoutes)



// Upload
app.use("/api/uploads*", (req, res, next) => {
  try {
    res.sendFile(__dirname + "/uploads" + req.params[0]);
  } catch (error) {
    next();
  }
});

db.sync().then(
  app.listen(port, function () {
    console.log("server is running on port " + port);
  })
   
).catch( err =>  console.log(err))