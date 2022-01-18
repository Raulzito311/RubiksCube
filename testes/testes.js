var a = "false";
var b = "true";
var c = "false";
/*
var aa = "";
var bb = "";
var cc = "";
*/
var OLL = function(){
	var aa = "";
	var bb = "";
	var cc = "";

	if(a == "true"){
		aa = "a = true";
		return aa;
	}else{
		if(b == "true"){
			bb = "b = true";
			return bb;
		}else{
			if(c == "true"){
				cc = "c = true";
				return cc;
			}
		}
	}
};

var result = OLL();

console.log(result);

