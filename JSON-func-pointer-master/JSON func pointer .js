var data =
{
	//execute function : // element, element......
	"functionA":["element1","element2"],
	"functionB":"element3",
	"functionC":"element4"

};

checkInput();
	
//this function is main method
function checkInput(){
	//var contact = JSON.parse(data);
	//contact.functionA;
	var el1 = "";
	var el2;

	for(var key in data){
		el1 = data[key];
        //function Pointer
		var p;
		WScript.StdOut.Write(key + "\r\n");
		eval(" p = " + key + ";");
		//eval(" p = " + key + ";");
		p(el1);
		//WScript.StdOut.Write(p(el1) + "\r\n");
	}  
		
}


//this function for element check typeA
function functionA(elementA){
	var el1 = elementA[0];
	var el2 = elementA[1];
	if(elementA === ""){
		return false;
	}
	//console.log("functionA");
	WScript.StdOut.Write(el1 + "_and_" + el2 + "\r\n");
	WScript.StdOut.Write("functionA is executed \r\n");
	return true;
}

//this function for element check typeB
function functionB(element){
	
	if(element === ""){
		return false;
	}
	//console.log("functionB");
	WScript.StdOut.Write(element + "\r\n" );
	WScript.StdOut.Write("functionB is executed \r\n");
	return true;
}

//this function for element check typeB
function functionC(element){
	
	if(element === ""){
		return false;
	}
	//console.log("functionC");
	WScript.StdOut.Write(element + "\r\n" );
	WScript.StdOut.Write("functionC is executed \r\n");
	return true;
}

