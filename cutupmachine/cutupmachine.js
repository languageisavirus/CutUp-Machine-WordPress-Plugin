function cutupmachine()
{
	document.Tree.UserText.value=ArrayToCutup(StringToArray(document.Tree.UserText.value));
}

function ArrayToCutup(theArray)
{
	var theCutup = "";
	var TextDump = new Array();
	var onWord = 0;	
	var numWords = theArray.length;
	for (n=0;n<numWords;n++)
	{ 
		if (n > 0)
		{
			theCutup = theCutup + " ";
		}
		onWord = Math.floor(Math.random() * (numWords - n));
		theCutup = theCutup + theArray[onWord];
		TextDump = theArray.splice(onWord,1);
	}
	return theCutup;
}

function StringToArray(theString)
{
	var Punctuation = new Array(" ","\n","\t","\r","\"","“","”",",",".",";","!","@","#","$","%","^","*","(",")",":","[","{","}","]","¡","¢","£","¤","¥","¦","¨","°","±","¶","/","\\","–","—","¿","»","«","|","_","`","~");
	var theArray = new Array();	
	var onWord = 0;
	var numPunctuation = Punctuation.length;
	var TextLength = theString.length;
	for (var n=0;n<TextLength;n++)
	{
		thisChar = theString.charAt(n);
		isValidChar = true;
		for (var m=0;m<numPunctuation;m++)
		{
			if (thisChar == Punctuation[m])
			{
				if (theArray[onWord] == null)
				{
				}
				else
				{
					onWord++;
				}
				isValidChar = false;
			}
		}
		if (isValidChar)
		{
			if (theArray[onWord] == null)
			{
				theArray[onWord] = thisChar;
			}
			else
			{
				theArray[onWord] = theArray[onWord] + thisChar;
			}
		}
	}
 	return theArray;
}
