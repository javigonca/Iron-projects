


module.exports.isValidUrl = function (url) {
  try {
    new URL(url);
    return true
  } catch(error) {
    return false;
  }
}