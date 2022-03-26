let tableOne = ["Arditi", "Asdreni", "Roberti"];
let tableTwo = ["Kalum", "Arron", "Maksim"];
let tableThree = ["Asher", "Janelle", "Catrina"];

let guestName = prompt("Whats your name?");

if(tableOne.includes(guestName)){
  alert('Table One')
}
else if (tableTwo.includes(guestName)){
  alert('Table Two')
}
else if (tableThree.includes(guestName)){
  alert('Table Three')
}
else {
  alert('Shko nshpi');
}