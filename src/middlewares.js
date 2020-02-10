let counter = 0;

exports.notFound = function(_, res) {
  return res.status(404).json({
    error: "Not found endpoint"
  });
};

exports.requestCounter = function(req, res, next) {
  counter = counter + 1;

  console.log(`[${req.method}] ${req.originalUrl} => ${counter}`);

  next();
};
