var letters = process.argv.slice(2).join("");

function countLetters(string) {
  var freq = {};
  for (var i=0; i<string.length;i++) {
      var character = string.charAt(i).toLowerCase();
      if (freq[character]) {
          freq[character]++;
      } else {
          freq[character] = 1;
      }
  }

  return freq;
};



console.log(countLetters(letters));