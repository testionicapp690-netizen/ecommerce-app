exports.notFound = (req, res) => {
  res.status(404).json({ message: `Not Found - ${req.originalUrl}` });
};

exports.errorHandler = (err, _req, res, _next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    message: err.message || 'Server error',
    stack: process.env.NODE_ENV === 'production' ? undefined : err.stack
  });
};
