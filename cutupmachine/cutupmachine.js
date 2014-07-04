function runlines()
{
	var Punctuation=new Array(" ","\"","â€œ","â€",",",".",";","!","@","#","$","%","^","*","(",")",":","[","{","}","]","Â¡","Â¢","Â£","Â¤","Â¥","Â¦","Â¨","Â°","Â±","Â¶","/","\\","â€“","â€”","Â¿","Â»","Â«","|","_","`","~");
	var TextIn=new Array();	
	var TextOut;
	numPunctuation = Punctuation.length;
	onWord = 0;
	numPerLine = document.Tree.numPerLine.value;
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
	numLines = Math.floor(numWords/numPerLine) + 1;
	
	for (var n=0;n<numLines;n++)
	{ 
		if (n > 0)
		{
			TextOut = TextOut + " ";
		}
		for (var m=0;m<numPerLine;m++)
		{
			onWord = n + (numLines * m);
			if (TextOut == null)
			{
				TextOut = TextIn[onWord];
			}
			else if (onWord < numWords)
			{
				if (m > 0)
				{
					TextOut = TextOut + " ";
				}
				TextOut = TextOut + TextIn[onWord];
			}
		}
	}
	
	document.Tree.UserText.value=TextOut;
	
}
