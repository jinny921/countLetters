var letters = process.argv.slice(2).toString().toLowerCase().split(",").join("");

function getFrequency(string) {
    var freq = {};
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        // console.log(character[i]);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }
        // console.log(character[i]);
    return freq;
};

// for(i = 0; i < letters.length; i++) {
//     var str = letters;
//     console.log(str[i]);
// }

// for (var x=0; x < s.length; ++x) {
// console.log(s[x]+'\n');}
// for (i = 0; i <letters.length; i++) {
//     console.log(getFrequency(letters + '\n'));
// }
console.log(getFrequency(letters));