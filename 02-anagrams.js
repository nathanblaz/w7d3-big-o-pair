function firstAnagram(str1, str2) {
  // for loop
  for (let i = 0; i < str1.length; i++) {
    // index of on second string inputting i
    let currentIndex = str1[i];
    let matchingIndex = str2.indexOf(currentIndex);
    console.log(matchingIndex);
    if (matchingIndex) {
      // delete at that index 
      str2.replace(`${str2[matchingIndex]}`, '');
    }
  }
  if (str2.length === 0) {
    return true;
  }
  else return false;
  
}



function secondAnagram(str1, str2) {
  // Code goes here ....
}


function thirdAnagram(str1, str2) {
  // Code goes here ....
}


function fourthAnagram(str1, str2) {
  // Code goes here ....
}


// isAnagram("gizmo", "sally");    // => false
console.log(firstAnagram("elvis", "lives"));    // => true
