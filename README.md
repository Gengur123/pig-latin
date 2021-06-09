Describe: pigLatin()

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("a");
Expected Output: "away"

function pigLatin(text){
	if(text === "a" || "e" || "i" || "o" || "u"){
    let word = text.concat("way");
    return word
    }
  }

Test: "It recognizes a single vowel in a word with multiple characters."
code: pigLatin("Epicodus")
Expected Output: "Epicodusway"

function pigLatin(text){
	if(text.length[0] === "a" || "e" || "i" || "o" || "u"){
    let word = text.concat("way");
    return word
    }
  }

