// will set the mongoose connection for dev or prod database depending on the environment 
if(process.env.NODE_ENV === 'production') {
  module.exports = {
    MONGO_URI: 'mongodb://josh:josh@ds221990.mlab.com:21990/palette-picker-prod'
  }
} else {
  module.exports = {
    MONGO_URI: 'mongodb://josh:josh@ds123124.mlab.com:23124/palette-picker-dev'
  }
}