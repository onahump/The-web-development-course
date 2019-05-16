// create secretNumber
var secretNumber = 100;
//ask user for guest
var stringGuest = prompt("Guess a number");
var guest = Number(stringGuest);
//check results
if(guest == secretNumber){
    alert("YOU GOT IT ");
}else if(guest < secretNumber){
    alert("IS LOWER!");
}else if(guest > secretNumber){
    alert("IS HIGHER!");
}else{
    alert("WRONG!");
}


/*
var count = -10

while(count < 20){
	console.log("Count is: " + count);
	count ++
}
*/

/*
var count = 10

while(count <= 40){
	console.log("Count is: " + count);
	count +=2
}
*/

/*
var count = 300

while(count <= 333){
    if (count % 2 == 1){
        console.log("Count is: " + count);
    }
    count ++
}
*/

/*
var count = 5

while(count <= 50){
    if (count % 5 == 0 && count % 3 == 0){
        console.log("Count is: " + count);
    }
    count ++
}
*/



