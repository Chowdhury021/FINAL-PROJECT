// middleware/errorHandler.js
res.status(statusCode).json({
  message: err.message,
  stack: process.env.NODE_ENV === 'production' ? null : err.stack
});