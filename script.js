
/*   https://docs.google.com/document/d/1Fi_WrkQV6xD3zv8Q-uevjdQgO6-puNB3RR40o6_jREs/edit#heading=h.y0x62974vreb   
*/


//* Without exception, there is a flat markup on all jobs of 5%
//* For each person that needs to work on the job, there is a markup of 1.2%
//The flat markup is calculated first and then all other markups are calculated on top of the base price plus flat markup.

//Markups are also added depending on the types of materials involved:

//* If pharmaceuticals are involved, there is an immediate 7.5% markup
//* For food, there is a 13% markup
//* Electronics require a 2% markup
//* Everything else, there is no markup 
  /*Example 1:
----------
    Input:  $1,299.99, 3 people, food
    Output: $1,591.58

Example 2:
----------
    Input:  $5,432.00, 1 person, drugs
    Output: $6,199.81

Example 3:
----------
    Input:  $12,456.95, 4 people, books
    Output: $13,707.63*/


function input(){

    var varInput = prompt("Please enter data", "$1,299.99, 3 people, food");
    var varInput=varInput.replace(',','').replace(/[#$\]\\@]/,'').split(',');

    var basePrice=parseFloat(varInput[0]);
    var people = parseFloat(varInput[1]);
    var markup = varInput[2].split(" ").join("");
    
    var flatMarkup=basePrice*0.05;
    var peopleMarkup=people*0.012*(basePrice+flatMarkup);

    var outputMarkup;
    if (markup=="drugs"){
      outputMarkup=(basePrice+flatMarkup)*0.075+peopleMarkup+flatMarkup+basePrice;
    }  else if (markup=="food"){
      outputMarkup=(basePrice+flatMarkup)*0.13+peopleMarkup+flatMarkup+basePrice;
    } else if(markup=="electronics"){
      outputMarkup=(basePrice+flatMarkup)*0.02+peopleMarkup+flatMarkup+basePrice;
    } else {
     outputMarkup=peopleMarkup+flatMarkup+basePrice;
    }
    outputMarkup = Math.round(outputMarkup*100)/100;
    return outputMarkup.toLocaleString();
}

//console.log("output: " + "$"+input());
alert("output: " + "$"+input());

   
   
   

/* object with the markups.
let markup = {
  ...
  food : 0.13
  ...
}
    
/*var output = function(basePrice, people, markup){
    this.basePrice = basePrice;
    this.people = people;
    this.markup = markup;
  
}

var myOutput= new output(1,299.99, 3, food);
*/