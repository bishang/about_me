'use strict';
//Does Bessie have a twin?
var twin = prompt('Does Bessie have a twin?');
console.log('Twin Guess:', twin);

if(twin.toUpperCase() === 'YES' || twin.toLowerCase() === 'y') {
  alert('Yes! She has a twin sister!');
} else {
  alert('Wrong! She has a twin sister.');
}

//Does Bessie drive a Range Rover?
var drive = prompt('Does Bessie drive a Range rover?');
console.log('Car guess:', drive);

if(drive.toUpperCase() === 'NO' || drive.toLowerCase() === 'n') {
  alert('Correct, she drives a KIA Soul.');
} else {
  alert('Wrong! That car is way too expensive!');
}

//Has Bessie ever traveled outside of the country?
var travel = prompt('Has Bessie ever traveled outside of the country?');
console.log('Travel guess:', travel);

if(travel.toUpperCase() === 'YES' || travel.toLowerCase() === 'y') {
  alert('Correct! She has been to the Philippines.');
} else {
  alert('WRONG! She\'s been to The Phillpines and Canada.');
}

//Was Bessie born in Seattle?
var born = prompt('Was Bessie born in Seattle?');
console.log('Born guess:', born)

if(born.toUpperCase() === 'YES' || born.toLowerCase() === 'y') {
  alert('Yes! She was born at the UWMC.');
} else {
  alert('You guessed wrong, she was born at UWMC.');
}

//Is Bessie's favorite dog the Belgium Malinois?
var dog = prompt('Is Bessie\'s favorite dog the Belgian Malinois?');
console.log('Dog guess:', dog);

if(drive.toUpperCase() === 'NO' || drive.toLowerCase() === 'n') {
  alert('Correct, her favorite dog is the Welsh Pembroke Corgi.');
} else {
  alert('No way! She LOVES corgis.');
}
