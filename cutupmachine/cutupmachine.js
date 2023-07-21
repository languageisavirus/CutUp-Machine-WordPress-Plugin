var invalid_chars = ["\r","\n"," ","\"","“","”",",",".",";","!","@","#","$","%","^","*","(",")",":","[","{","}","]","¡","¢","£","¤","¥","¦","¨","°","±","¶","/","\\","–","—","¿","»","«","|","_","`","~","+","-"]; //these characters become word breaks

function cut_it_up(){
  var user_text = document.getElementById("text_in").value;
  var text_out = "";
  user_text = clean_text(user_text);
  var word_list = user_text.split(" "); //put text into array
  var first_word = true;
  var random_word;
  var wordCount = 0;
  for (i=word_list.length;i>0;i--) { //backwards, because the array with be shortened with each loop.
    random_word = Math.floor(Math.random() * i);
    if (wordCount >= 10) {
      text_out += "\n";
      wordCount = 0;
    }
    if (!first_word) { //adds space if this is not the first word
      text_out += " ";
    }
    text_out += word_list[random_word];
    first_word = false;
    wordCount++;
    word_list.splice(random_word,1); //remove word just used from array.
  }
  document.getElementById("text_out").value = text_out;
}
	
function clean_text(text_in) {
	//strip invalid characters from user text
	var text_length = text_in.length;
	var this_char = "";
	var text_out= "";
	var prev_char_invalid = false;
	var first_valid_char = true;
	for (i=0;i<text_length;i++){
		this_char = text_in.charAt(i);
		if (invalid_chars.includes(this_char)){
			prev_char_invalid = true;
		}
		else {
			if (prev_char_invalid && !first_valid_char) { //if this not the first valid character, add delimiter.
				text_out += " ";
			}
			text_out += this_char;
			first_valid_char = false;
			prev_char_invalid = false;
		}
	}
	return text_out;
}
