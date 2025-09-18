function addNumbers(a: number, b: number): number {
  return a + b;
}

let sum: number = addNumbers(5, 15);
console.log(`Sum: ${sum}`);

function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}

greet("Alice");