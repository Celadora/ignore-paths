const ignorePaths = function(paths, middleware) {
  return function(req, res, next) {
    if(typeof paths == 'string') paths = [paths];

    for(var i = 0; i < paths.length; i++) {
      var path = paths[i];
      if(path instanceof RegExp) {
        if(req.path.match(path)) return next();

      } else if(path == req.path) {
        return next();
      }
    }

    return middleware(req, res, next);
  };
};

module.exports = ignorePaths;
