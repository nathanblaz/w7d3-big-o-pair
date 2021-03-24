function firstAnagram(str1, str2) {
  // for loop
  for (let i = 0; i < str1.length; i++) {
    if (str2.includes(str1[i])) {
      // delete at that index 
      let splitArr = str2.split(str1[i]);
      str2 = splitArr.join("");
      console.log(str2);
    }
  }
  if (str2.length === 0) {
    return true;
  }
  else return false;
  
}

console.log(firstAnagram("elvis", "lives"));    // => true

function secondAnagram(str1, str2) {
  // Code goes here ....
}


function thirdAnagram(str1, str2) {
  // Code goes here ....
}


function fourthAnagram(str1, str2) {
  // Code goes here ....
}


// // isAnagram("gizmo", "sally");    // => false
// console.log(firstAnagram("elvis", "lives"));    // => true
