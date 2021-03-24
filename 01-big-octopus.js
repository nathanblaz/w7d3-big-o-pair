// polynomial example O(n^2)

function quadraticBiggestFish(fishes) {
  for(let i = 0; i < fishes.length; i++) {
    for(let j = 0; j < fishes.length; j++) {
      console.log(`I equals ${i}, J equals ${j}`);
      if(j === i) {
        console.log(`Match!`);
        return true;
      }
    }
  }
}

// const fishies = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish',
// 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh'];
// quadraticBiggestFish(fishies);


// Loglinear/Linearithmic/Quasilinear example O(n log(n))

function nlognBiggestFish(fishes) {
fishes.sort((a, b) => {
  if (a.length < b.length) {
    return -1;
  }
  if (a.length > b.length) {
    return 1;
  }
  return 0;
});
return fishes[fishes.length -1];
}

// const fishies = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish',
// 'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh'];
// console.log(nlognBiggestFish(fishies));


function linearBiggestFish(fishes) {
  // Code goes here ...
}


tilesArray = ["up", "right-up", "right", "right-down", "down", "left-down", "left", "left-up"]
function slowDance(direction, tilesArray) {
  // Code goes here ...
}


tilesObj = {
  "up": 0,
  "right-up": 1,
  "right": 2,
  "right-down": 3,
  "down": 4,
  "left-down": 5,
  "left": 6,
  "left-up": 7
}
function fastDance(direction, tilesObj) {
  // Code goes here ...
}
