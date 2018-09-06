function foo(num) {
  console.log("foo ...");
  return num => {
    return num * 2;
  };
}

console.log(foo(3));
