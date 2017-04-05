var letters = process.argv.slice(2).toString().toLowerCase().split(",").join("");

function getFrequency(string) {
    var freq = {};
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }
        // console.log(character[i]);
    return freq;
};



console.log(getFrequency(letters));



// var myString = "Mr. Jack Adams";
// var mySplitResult;
// mySplitResult = myString.split("");
// for(i = 0; i < mySplitResult.length; i++)
//            {
//   document.write("<br /> Element " + i + " of the array is: " +  |
//       mySplitResult[i]);
//            }