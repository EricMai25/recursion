// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
	var elementArray = [];
	var test = function(element){
		if(element.classList && element.classList.contains(className)){
			elementArray.push(element);
		}
		if(element.childNodes){
			element.childNodes.forEach(function(element){
				test(element);
			});
		}
	}
	test(document.body);
	return elementArray;
};
