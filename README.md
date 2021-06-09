Describe: pigLatin()

Test: "It will add 'way' to the end of words that begin with a vowel."
Code: pigLatin("a");
Expected Output: "away"

function pigLatin(text){
	if(text === "a"|| text === "e" ||text === "i" || text === "o" || text === "u") {
    let word = text.concat("way");
    return word

    }
    else {
    	return false
    }
  }


Test: "It recognizes a single vowel in a word with multiple characters."
code: pigLatin("epicodus")
Expected Output: "epicodusway"

function pigLatin(text){
	if(text[0] === "a"|| text[0] === "e" ||text[0] === "i" || text[0] === "o" || text[0] === "u") {
    let word = text.concat("way");
    return word

    }
    else {
    	return false
    }
  }

Test: "It recognizes a single vowel whether its uppercase or lowercase."
code: pigLatin("Epicodus")
Expected Output: ("Epicodusway")

function pigLatin(text){
	if(text[0].toLowerCase() === "a"|| text[0].toLowerCase() === "e" ||text[0].toLowerCase() === "i" || text[0].toLowerCase() === "o" || text[0].toLowerCase() === "u") {
    let word = text.concat("way");
    return word

    }
    else {
    	return false
    }
  }

Test: "It recognizes strings and seperates them to make a sentence"
code: pigLatin("Add Epi Pig")
Expected Output:("Addway" "Epiway" "Pig")
