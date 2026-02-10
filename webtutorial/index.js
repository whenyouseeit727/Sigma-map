console.log ("function basics")
function change_nameUppercase (name){
    return name.toUpperCase() + " Uppercase";
}



function alerts(word){
    alert (word);
}

function first_capt(name){
    return name.charAt(0).toUpperCase() + name.slice(1)
}

function last_letter(name){
    return name.charAt(name.length -1)
}

alerts("Hello world");
console.log(first_capt("aBCD"));
console.log(change_nameUppercase("fah"));


// solve for even and odd

const oddeven = prompt("Enter a number:  ");

if(oddeven % 2 == 0) {
   alert(oddeven + " is even")
} else {
    alert(oddeven + " is odd")
}

let sumofallnumbers = prompt("Enter a number Part 2: ");
let newssomeofnumbers = 0;


for(let i=1; i<=sumofallnumbers; i++){
    newssomeofnumbers+= i;
    
}

alert(newssomeofnumbers)

const collectionofnumbers = [];





alert("Input Three numberss")
for(let i = 1; i<=3; i++){
    let holdnumb = prompt(i + " number");
    collectionofnumbers.push(holdnumb)


}
alert(collectionofnumbers.length)

collectionofnumbers.sort(function(a,b){return a-b});

alert(collectionofnumbers)
alert(collectionofnumbers[collectionofnumbers.length-1])





// rock paper scissorss

// get user input firsst
// call a function for the bot
// compare the actions

let Player1 = prompt(" R, P , S");
const robotchoice = ["R, P, S"]

let robot = Math.floor(Math.random() * 2);

let robotpick = robotchoice[robot]

if(robotpick == Player1){
    alert("No one wins")
} else if (robotpick == "R" && Player1 == "S"){
    alert("Robot wins")
} else if (robotpick == "R" && Player1 == "P"){
    alert("Player1 wwins")
} else if (robotpick == "P" && Player1 == "S"){
    alert("Robot wwins")
} else if (robotpick == "P" && Player1 == "R"){
    alert("Player1 wwins")
} else if (robotpick == "S" && Player1 == "P"){
    alert("Robot wwins")
} else if (robotpick == "S" && Player1 == "R"){
    alert("Player1 wwins")
} 




