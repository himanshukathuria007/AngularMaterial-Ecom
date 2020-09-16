const connection = require("../db");
const bcrypt = require("bcryptjs");
const Seller = require("../models/Seller");
const Product = require("../models/Products");
const jwt = require("jsonwebtoken");

exports.sellerregister = async (req, res) => {
  try {
    const today = new Date();
    const hashedPassword = await bcrypt.hash(req.body.sellerpassword, 10);

  
    const seller = {
      sellername : req.body.sellername,
      selleremail: req.body.selleremail,
      sellernumber: req.body.sellernumber,
      sellerpassword: hashedPassword
    }
  console.log(seller)
    const createSeller = await Seller.create(seller)
  
  
    res.status(201).json({data:  createSeller})
  } catch (err) {
    console.log(err)
  }
 


}

exports.sellerlogin = (req, res) => {
    const selleremail = req.body.selleremail;
    const sellerpassword = req.body.sellerpassword;
  
    Seller.findOne({
      where: {
        selleremail
      },
    })
      .then((seller) => {
        if (!seller) {
          res.json({ msg: "seller not available" });
        } else {
          matchPassword = bcrypt.compare(sellerpassword, seller.sellerpassword);
  
          let token = jwt.sign(
            {
              id: seller.id,
              sellername: seller.sellername,
              selleremail: seller.selleremail

            },
            process.env.JWT_SECRET,
            {
              expiresIn: process.env.JWT_EXPIRES_IN,
            }
          );
  
          if (matchPassword) {
            res.json({
              status: true,
              msg: "Login Successfully",
              token,
             
              sellerid: seller.sellerid,
              sellername: seller.sellername,
              selleremail: seller.selleremail
            });
          }
        }
      })
      .catch((err) => {
        res.send("error" + err);
      });
  };
  



  exports.addproduct = async (req, res) => {
    var today = new Date();

    // Seller.findOne({
    //   where:{
    //     email:req.body.email,
    //   },
    // })
    // .then((seller) =>{

const product ={
  sellerproductid: req.body.sellerproductid,
  productname: req.body.productname,
  productquantity:req.body.productquantity,
  productimg : req.file.path,
  productdescription : req.body.productdescription,
  sellerid : req.body.sellerid

}

     Product.create(product)
     .then(product => res.json({ msg: 'Product created', product}))
     .catch(err => res.json({err}))
    // })


  }

