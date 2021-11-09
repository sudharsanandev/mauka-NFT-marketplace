var fs = require('fs')
  , gm = require('gm');
 
// resize and remove EXIF profile data
gm('rajinikanth-16.jpg')
.resize(240, 240)
.noProfile()
.write('resize.png', function (err) {
  if (!err) console.log('done');
  else console.log(err)
});

console.log("working")