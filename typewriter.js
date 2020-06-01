//const sentence = "hello there from lighthouse labs";
const typeWriter = function(sentence, printnl){
let t = 0;
  for (const char of sentence) {
    t = t + 50;
    setTimeout(() => {
      process.stdout.write(char);
    }, t)
  }
  printnl(t);
}

const printNewLine = function(t) {
  setTimeout(() => {
    process.stdout.write("\n");
  }, t)
}

typeWriter("hello there from lighthouse labs",printNewLine);