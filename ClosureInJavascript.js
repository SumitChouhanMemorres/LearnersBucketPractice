function outer() {
  let blog = "abc";
  function inner() {
    let blog = "pqr";
    function inner2() {
      console.log(blog);
    }
    inner2();
  }
  function innerS() {
    let blog = "lmn";
    function inner2() {
      console.log(blog);
    }
    inner2();
  }
  inner();
  innerS();
}

function outer2(x) {
  return function inner() {
    console.log(x);
  };
}

outer();

const myFun = outer2(10);
myFun();
