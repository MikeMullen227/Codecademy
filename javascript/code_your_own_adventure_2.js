
var user = prompt("Do you prefer your food to be salty, sweet, sour, or bitter?").toUpperCase();

switch(user) {
    case 'SALTY':
        var potato_chips = prompt("Do you like potato chips (YES or NO?)").toUpperCase();
        var pickle = prompt("Do you like pickles?").toUpperCase();
        if(potato_chips === 'YES' && pickle === 'YES') {
            console.log("They go great with a sandwich.");
        } else {
            console.log("You must not like sour then.")  
        }
        break;
    case 'SWEET':
        var cake = prompt("Do you like cake (YES or NO)?")
        var pie = prompt("Do you like pie (YES OR NO)?")
        if(cake === 'YES' || pie === 'YES') {
            
            console.log("You better go easy on the sweets if you don't want to see the dentist."); 
        } else {
            console.log("What kind of sweet tooth doesn't like pie or cake?");
         }
        break;
    case 'SOUR':
        console.log("You like a little excitement when you eat!");
        break;
    case 'BITTER':
        console.log("Bitter foods are the healthiest so keep it up.");
    default: 
        console.log("That is not one of the basic tastes. Try again.");
           
}