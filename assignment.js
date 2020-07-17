// No.1 feetToMile

function feetToMile(feetValue){
    var mileValue = feetValue /5280;
    return mileValue;
}
var mileResult = feetToMile(26400);
console.log("Feet to Mile convert result is : " + mileResult);



//No.2 woodCalculator
function woodCalculator(numChair, numTable, numBed){
var chairCount = numChair * 1;
var tableCount = numTable * 3;
var bedCount = numBed * 5;
var totalWood = chairCount + tableCount + bedCount;
return totalWood;
}
var woodResult = woodCalculator(2,2,2);
console.log("Total wood result is : " + woodResult);



// No.3 brickCalculator


function brickCalculator(numFloor){
var totalBrick;
if(numFloor - Math.round(numFloor) != 0){      
    totalBrick = -1;
}
else if(numFloor > 0 && numFloor <= 10){      // 1st - 10th floor. 
    totalBrick = numFloor * 15000;
}
else if(numFloor > 10 && numFloor <= 20){     // 11th - 20th floor. 
    totalBrick = 10 * 15000 + (numFloor - 10) * 12000;
}
else if(numFloor > 20){                       // 21th++ unlimited floor. 
    totalBrick = 10 * 15000 + 10 * 12000 + (numFloor - 20) * 10000;
}
else{                                         // This is to handle negative input. 
    totalBrick = -1;
}
return totalBrick;
}

// Check brickCalculator
var totalBrick = brickCalculator(120);
if(totalBrick == -1) {
console.log("Error");
}
else {
console.log("Total brick is : " + totalBrick);
}




//No.4 tinyfriend
function tinyFriend(friendsArray){

var tinyNameLength = friendsArray[0].length;            
var tinyNames = [];                                      

for(i = 0 ; i < friendsArray.length; i++){
    var nameLength = friendsArray[i].length;

    if(nameLength != 0 && nameLength < tinyNameLength){  
        tinyNameLength = nameLength;
        tinyNames = [];                                   
        tinyNames.push(friendsArray[i]);
    }
    else if(nameLength == tinyNameLength){                
        tinyNames.push(friendsArray[i]);
    }
}
return tinyNames;
}

// Checking tinyFriends function
var friendsArray = ['rijvee', 'abdullah', 'Mashrafee', 'rokib', 'akib' , ];

var tinyNames = tinyFriend(friendsArray);
if(tinyNames.length == 0){
console.log("There was no name in that array");        // No name in the array.   
}

else{ (tinyNames.length == 1) 
console.log("The tiny name is : " + tinyNames[0]);       // Printing 1 tiny name. 
}




