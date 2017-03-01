function doScaledTimeout(i) {
   setInterval(function() {
    doWarning(i)
  }, i * 10000);
}

function doWarning(i){
  setInterval(function(){
    console.log('warning')
  }, 2000)
  setInterval(function(){
    console.log(i)
  }, 5000)

}

for (var i = 1; i <= 11; i++){
  doScaledTimeout(i);
}
