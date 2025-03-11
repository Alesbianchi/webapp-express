function setImagePath(req, res, next) {
    req.imagePath = `${req.protocol}://${req.get('host')}/imgs/movies/`;
    console.log("Image path set to:", req.imagePath);
    next()
}

module.exports = setImagePath;