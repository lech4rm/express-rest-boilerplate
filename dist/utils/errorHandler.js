"use strict";

var _require = require('./logging'),
    error = _require.error;

function errorHandler(app) {
  app.use(function (err, req, res, next) {
    if (err) {
      error(err.stack);
      res.status(500).json({
        message: process.env.NODE_ENV === 'dev' ? err.stack : 'Something went wrong'
      });
    } else {
      next();
    }
  });
}

module.exports = errorHandler;