// *** YOUR ANSWER BELOW ***

function bottlesOfBeer(x){
  let versus = ""
  for(let i = x; i > 0; i--){
    versus += `${i} of beer on the wall! ${i} bottle of beer, take one down, pass it around! `;

  }

  return versus;

}

bottlesOfBeer(10);
