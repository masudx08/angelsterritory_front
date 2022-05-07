function cookieParser(parseIt){
var match = document.cookie.match(new RegExp('(^| )' + parseIt + '=([^;]+)'));
if(match){
  return match[2]
}
}



module.exports = {cookieParser}