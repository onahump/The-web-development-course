console.log("NUMBERS BETWEEN -10 AND 19")

for(var count = -10; count < 20; count++){
    console.log(count);
}

console.log("EVEN NUMBERS BETWEEN 10 AND 40")
for(var count = 10; count <= 40 ; count++){
    if(count % 2 === 0){
        console.log(count);
    }
}

console.log("ODD NUMBERS BETWEEN 300 AND 333")
for(var count = 300; count <= 333 ; count++){
    if(count %2 !== 0){
        console.log(count);
    }
}

console.log("NUMBERS DIVISIBLE BY 5 AND 3")
for(var count = 5; count <= 50 ; count++){
    if(count %5 === 0 && count % 3 === 0){
        console.log(count);
    }
}
