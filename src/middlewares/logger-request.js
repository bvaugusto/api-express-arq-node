module.exports = (req, res, next) => {
  console.log(`Request router: ${req.originalUrl}`)
  next();
}