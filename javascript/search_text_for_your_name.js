/*jshint multistr:true */
var text = "this is a string Mike right here you know Mike what i mean"
var myName = "Mike"
var hits = []

for (var i = 0; i < text.length; i++) {
    if ( text[i] === "M") {
        for (var j = i; j < myName.length + i ; j++){
            hits.push(text[j]);
        }
    }
    
}

if (hits.length === 0) {
    console.log("Your name wasn't found!")
}
else {
    console.log(hits)
}