function cutupmachine()
{
	var Punctuation=new Array(" ","\n","\t","\r","\"","â€œ","â€",",",".",";","!","@","#","$","%","^","*","(",")",":","[","{","}","]","Â¡","Â¢","Â£","Â¤","Â¥","Â¦","Â¨","Â°","Â±","Â¶","/","\\","â€“","â€”","Â¿","Â»","Â«","|","_","`","~");
	var TextIn=new Array();	
	var TextDump=new Array();	
	var TextOut = "";
	numPunctuation = Punctuation.length;
	var onWord = 0;
	UserText = document.Tree.UserText.value;
	TextLength = UserText.length;
	for (var n=0;n<TextLength;n++)
	{
		thisChar = UserText.charAt(n);
		isValidChar = true;
		for (var m=0;m<numPunctuation;m++)
		{
			if (thisChar == Punctuation[m])
			{
				if (TextIn[onWord] == null)
				{
				}
				else
				{
					onWord++;
				}
				isValidChar = false;
			}
		}
		if(isValidChar)
		{
			if (TextIn[onWord] == null)
			{
				TextIn[onWord] = thisChar;
			}
			else
			{
				TextIn[onWord] = TextIn[onWord] + thisChar;
			}
		}
	}
	numWords = TextIn.length;
	
	for (n=0;n<numWords;n++)
	{ 
		if (n > 0)
		{
			TextOut = TextOut + " ";
		}
		onWord = Math.floor(Math.random() * (numWords - n));
		TextOut = TextOut + TextIn[onWord];
		TextDump = TextIn.splice(onWord,1);
	}
	document.Tree.UserText.value=TextOut;
	
}
