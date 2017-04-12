'use strict';

var pup = '';
var doggy = [];

pup = pup.split('');
for( var i=0; i<pup.length; i++) {
 doggy.unshift(pup[i]);
}

pup = pup.join('');
doggy = doggy.join('');

if(pup === doggy) {
  console.log('pallindrome');
} else {
  console.log('loser');
}
