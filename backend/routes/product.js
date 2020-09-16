const express = require('express');
const router = express.Router();
const db = require("../db");
const multer = require('multer');
const sellerController = require("../controller/seller-controller");

const Auth = require("../middleware/check-auth")


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
  
  const fileFilter = (req, file, cb) => {

    //if(file.mimetype.startWith('image')){}
    if ((file.mimetype == 'image/jpeg') || (file.mimetype == 'image/png') || (file.mimetype == 'image/webp')) {
      cb(null, true);
    } else {
      console.log('Only Image ');
      cb(null, false);
    }
  };
  
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: process.env.MAX_FILE_UPLOAD
    },
    fileFilter
  });




router.post("/addproduct", sellerController.addproduct);
//router.post("/sellerlogin", sellerController.sellerlogin);


module.exports = router;