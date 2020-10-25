let p1 = {
    name: "Jill",
    age: 25,
    city: "spin",
  }
  let p2 = {
    name: "Robert",
    age: 25,
    city: "algeria",
  }

//ex1  
if (p1.age===p2.age)
{ 
     if(p1.city===p2.city){
    console.log("Jill wanted to date Robert")
}
    else{
    console.log("Jill wanted to date Robert, but couldn")
}
}
// end ex1

//ex2

let myList=[p1,p2];
myList[p1.name]="moor"
myList.splice(1,1)
console.log(myList);

//start of ex3

const arr = [p1,p2] ;

const myList = [];
myList.push(arr);
console.log(myList);

// end of ex 3

//start of ex 4
 
library = { 
    books : [

        {
            title:"mnhabebe",author:"harry"
        },
        {
            title:"habebeia",author:"john"
        }
    ]

}

console.log(library);

// end of ex 4

//start of ex5
const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  };
  
const name = prompt('Please enter the name for your reservation');
console.log(name);

const keyNames = Object.keys(reservations);
for(i=0;i<keyNames.length ;i++){
    reservations[keyNames[i].toLowerCase()] =  {claimed :  reservations[keyNames[i]].claimed};
}

console.log("res "+ reservations["ted"])

if (reservations[name.toLowerCase()] != undefined && reservations[name.toLowerCase()].claimed === false ){
    
    alert("welcome, "+name)
}
else if(reservations[name.toLowerCase()] != undefined  && reservations[name.toLowerCase()].claimed === true){
    alert("Hmm, someone already claimed this reservation")
}else{
    alert("You have no reservation")
    // adding 5.1 
   
    reservations[name.toLowerCase()] = {claimed : true};
    
    console.log(reservations);
}
// end of 5