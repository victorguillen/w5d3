
Array.prototype.uniq = function () {

  let unique = [];
  let test = function(el) {
    if(!unique.includes(el)) {
      unique.push(el);
    }
  };
  this.forEach(test);
  return unique;
};


Array.prototype.twoSum = function () {
  const pairs = [];
  for (var i = 0; i < this.length; i++) {
    for (var j = i + 1; j < this.length; j++) {
      if (i === j) {

      } else {
        if (this[i] + this[j] === 0) {
          console.log(`${i}, ${j}`);
          pairs.push([i, j]);

        }
      }
    }
  }
  return pairs;
};

// Array.prototype.myTranspose = function () {
//
//   let matrix = [];
//   for (var i = 0; i < this.length; i++) {
//     let tempMatrix = [];
//     for (var j = 0; j < this.length; j++) {
//       tempMatrix.push(this[j][i]);
//     }
//     matrix.push(tempMatrix);
//   }
//   return matrix;
// };

Array.prototype.myTranspose = function () {
  let matrix = [];
  for (var i = 0; i < this.length; i++) {
    matrix.push([]);
    for (var j = 0; j < this.length; j++) {
      matrix[i][j] = this[j][i];
    }
  }

  return matrix;
};
/// myEach

Array.prototype.myEach = function (cb) {
  let retArray = [];
  for (var i = 0; i < this.length; i++) {
    retArray.push(cb(this[i]));
  }
  return retArray;
};

function multiplyByTwo(el) {
  return el * 2;
}

////////////////////

Array.prototype.myMap = function (cb) {
  return this.myEach(cb);
};

/////////////
Array.prototype.myInject = function(cb, acc) {
  if (acc === undefined) {
    acc = this[0];
    let arr = this.slice(1, this.length).myEach(cb);
    arr.myEach(function(el){
      acc += el;
    });
  }
  else {
    acc = acc;
    let arr = this.myEach(cb);
    arr.myEach(function (el) {
      acc += el;
    });
}

  return acc;
};

function myBubble (arr) {
  let tempy = 0;
  let flag = true;
  while(flag) {
    for (var j = 0; j < arr.length; j++) {
      for (var i = 0; i < arr.length - 1; i++) {
        flag = false;
        if (arr[i] > arr[i + 1]) {
          tempy = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = tempy;
        flag = true;
        }
      }
    }
  }
  return arr;
}

function subStrings(string) {
  let subArr = [];
  for (var i = 0; i < string.length; i++) {
    for (var j = i + 1; j <= string.length; j++) {
      subArr.push(string.slice(i, j));
    }
  }

  return subArr;
}
