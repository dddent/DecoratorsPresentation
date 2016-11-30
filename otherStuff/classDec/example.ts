let decorated: Function[] = [];

function Decorate(target: Function) {
  decorated.push(target);
}

function isDecorated(target: Function) {
  return decorated.indexOf(target) > -1;
}

@Decorate
class Test { }

console.log(isDecorated(Test));