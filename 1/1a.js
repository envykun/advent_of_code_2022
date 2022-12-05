const fs = require("fs");

const fileName = "input_a.txt";

fs.readFile(fileName, "utf-8", (err, data) => {
  getMostCalories(data);
});

const getMostCalories = (data) => {
  const array = data.split("\n\r");
  const array2 = array.map((elf) =>
    elf
      .split("\r\n")
      .map((calory) => Number(calory.replace("\r", "").replace("\n", "")))
      .reduce((partial, a) => partial + a, 0)
  );

  console.log("1a", Math.max(...array2));

  array2.sort((a, b) => a - b).reverse();
  console.log("1b", array2[0] + array2[1] + array2[2]);
};
