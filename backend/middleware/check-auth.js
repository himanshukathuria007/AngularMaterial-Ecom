const jwt = require('jsonwebtoken');

exports.adminAuth = async (req, res, next) => {
    try {
      if (req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1];
        if (token) {
          const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
          req.userData = decodedToken;
          //console.log(req.userData)
          
          next();
        } else {
          handleError(null, next);
        }
      } else {
        handleError(null, next);
      }
    } catch (error) {
      handleError(error, next);
    }
  };
  

const handleError = async (error, next) => {
    if (error) {
      error.message = 'Auth Failed!!!';
      error.status = 401;
      next(error);
    } else {
      const error = new Error();
      error.message = 'Auth Failed!!';
      error.status = 401;
      next(error);
    }
  };

  exports.userAuth = async (req, res, next) => {
    try {
      if (req.headers.authorization) {
        const token = req.headers.authorization.split(' ')[1];
        if (token) {
          const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
          req.userData = decodedToken;
          next();
        } else {
          handleError(null, next);
        }
      } else {
        handleError(null, next);
      }
    } catch (error) {
      handleError(error, next);
    }
  };
  