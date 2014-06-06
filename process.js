var fs = require("fs");
var _ = require("underscore");

fs.readFile('/home/amey/Downloads/weather.dat', function (err, data) {
  var finaldata=[];
  var array = data.toString().split("\n") ; 
  for( i in array)
  {
  	finaldata[i]=[];
  	var datap = array[i].toString().split(/\s+/);
  	if (i != 0)
  	finaldata[i] = datap;
  }
	
	var minSpread=  _.min(finaldata, function(d) {
  	return d[2]-d[3];
  });
  
  var minTemp = _.min(finaldata, function(d) {
  	return d[3];
  });
  
  var maxTemp = _.max(finaldata, function(d) {
  	return d[2];
  });
  
	console.log("smallest spread day", minSpread[2]-minSpread[3] , " spread ", minSpread[1]);
	console.log("min tempature day ", minTemp[1], "with temp ", minTemp[3]);
  console.log("max tempature day ", maxTemp[1], "with temp ", maxTemp[2]);
});