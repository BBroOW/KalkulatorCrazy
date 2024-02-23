const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter a number: ", (num1) => {
  if (!Number.isInteger(Number(num1))) {
    console.log("Number cannot have decimals");
    process.exit();
  }

  readline.question("Enter an operation: ", (operation) => {
    if (
      operation != "+" &&
      operation != "-" &&
      operation != "*" &&
      operation != "/"
    ) {
      console.log("Operation is not valid");
      process.exit();
    }

    readline.question("Enter another number: ", (num2) => {
      if (!Number.isInteger(Number(num2))) {
        console.log("Number cannot have decimals");
        process.exit();
      }

      let result;
      switch (operation) {
        case "+":
          result = Number(num1) + Number(num2);
          console.log(result);
          break;
        case "-":
          result = Number(num1) - Number(num2);
          console.log(result);
          break;
        case "*":
          result = Number(num1) * Number(num2);
          console.log(result);
          break;
        case "/":
          result = Number(num1) / Number(num2);
          console.log(result);
          break;
      }

      readline.close();
    });
  });
});
