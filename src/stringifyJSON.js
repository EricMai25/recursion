// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if(typeof obj === "number" || typeof obj === "boolean"){
  	return obj.toString()
  }
  if(obj === null){
  	return "null";
  }if(typeof obj === "string"){
  	return '"'+ obj +'"'
  }

  if( Array.isArray(obj)){
  	var array1 = [];
  	if(obj.length>0){
  		obj.forEach(function(item){
  			array1.push(stringifyJSON(item))
  		})
  		return '[' +array1.join()+ ']' ;
  	}

  	return '[]';
  }

  if(typeof obj === 'object'){
  	var obj1 = [];
  	var long = Object.keys(obj).length;
  	if(long >0){
  			for(var key in obj){
  			if(obj.constructor === Function  || obj[key] === undefined){
  				return '{}'
  			}
  			obj1.push([stringifyJSON(key)] + ':' + stringifyJSON(obj[key]))
  		}

  	return '{' +obj1.join(',')+ "}"
  }
  	return '{}';
  }
};
