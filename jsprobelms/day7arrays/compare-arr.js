// compare two arrays and arrays length return true or flase
var a = () => {
  let arr1 = [1, 2, 3];
  let arr2 = [1, 2, 3];

  if (arr1.length !== arr2.length) {
    console.log(false);
  } else {
    same = false;
    for (i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        same = true;
      } else {
        same = false;
        break;
      }
    }

    if (same == true) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
};
a();
