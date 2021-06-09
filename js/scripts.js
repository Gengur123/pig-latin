function vowelChecker(text) {
  const vowelArray = ["a", "e" ,"i", "o", "u"];

    for (let i = 0; i < vowelArray.length; i ++) {
      if (vowelArray[i] === text.slice(0, 1)) {   
        return text.concat("way"); 
      };
}
return false;
}

function multipleWord(text) {
  const textArray = text.split(" ");
  console.log(textArray);
  for (let i = 0; i < textArray.length; i++) {
    vowelChecker(textArray[i]);
    console.log(vowelChecker(textArray[i]));
  }
}

multipleWord("hello goodbye away up")




// I found an example online for better understanding

function pigLatin(str) {
    // Convert string to lowercase
    str = str.toLowerCase()
    str = str.split(" ")
    // Initialize array of vowels
    const vowels = ["a", "e", "i", "o", "u"];
    // Initialize vowel index to 0
    let vowelIndex = 0;

  
    if (vowels.includes(str[0])) {
      // If first letter is a vowel
      return str + "way";
    } else {
      // If the first letter isn't a vowel i.e is a consonant
      for (let char of str) {
        // Loop through until the first vowel is found
        if (vowels.includes(char)) {
          // Store the index at which the first vowel exists
          vowelIndex = str.indexOf(char);
          break;
        }
      }
      // Compose final string
      return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
    }
  }
  