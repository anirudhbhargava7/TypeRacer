
var currentCount = 0;
var prevCount = 0;
var wordCount = 0;
var count = wordCount;
var usage = "";
var example = "";
var htmlString = "";


function setUsageText(){

	usage = document.getElementById("colorPrev").innerHTML;
}

function getExampleText(){

	//console.log(example);
	return usage.trim();
}


setUsageText();
usage = getExampleText();


var element = document.getElementById('colorPrev');
var textbox = document.getElementById('textbox');

function passValue(e){

	var keynum;

	//console.log(typeof(example));

	if(e.which){ // Netscape/Firefox/Opera					
		keynum = e.which;
	 }
    
    var key = String.fromCharCode(keynum);

	 switch (keynum){

	 	case 32:
	
	 		 if(key === usage.charAt(currentCount)){
	 		 	textbox.value="";
	 		 	var text = getExampleText();
	 		 	var grayString = text.substring(0, currentCount);
	 		 	var blueString = text.substring(currentCount+1, text.length-1);
	 		 	element.innerHTML = "<span class='gray'>"+grayString+"</span>  <span class = 'blue'>"+blueString+"</span> ";
	 		 	currentCount++;
	 		 	count = wordCount;
	 		 	wordCount++;
	 		 }
	 		break;	

	 		
	 	case 13:
	 		
			console.log ("Enter");
	 		 if(key === usage.charAt(currentCount)){
	 		 	textbox.value="";
	 		 	var text = getExampleText();
	 		 	var grayString = text.substring(0, currentCount);
	 		 	var blueString = text.substring(currentCount+1, text.length-1);
	 		 	element.innerHTML = "<span class='gray'>"+grayString+"</span>  <span class = 'blue'>"+blueString+"</span> ";
	 		 	currentCount++;
	 		 	count = wordCount;
	 		 	wordCount++;
	 		 }
	 

	 		 break;
	 	
	 	default:
	 		if(key === usage.charAt(currentCount)){

	 
		    	var temp = usage.charAt(currentCount);
		  
		    		htmlString+="<span class='red'>"+temp+"</span>";	

		    	var subStr = usage.substring(currentCount+1, usage.length-1);
		    	element.innerHTML = htmlString+subStr;
		    	currentCount++;
		    }

	 }


    console.log(keynum);    
    
 }        


