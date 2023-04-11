var removeStars = function(s) {
    const stackArr =[];
     
    for(const element of s) {
      if (element ==="*" && stackArr.length) {
        stackArr.pop();
      }  else {
        stackArr.push(element);
      }
    };

    return stackArr.join("");
}

console.log(removeStars("leet**cod*e"));