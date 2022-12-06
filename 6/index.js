const fs = require("fs");

const fileName = "input.txt";

fs.readFile(fileName, "utf-8", (err, data) => {
  const array = data.split("");
  moveContainers(array);
});

const moveContainers = (data) => {
  // const inputLength = 4;  // PART-ONE
  const inputLength = 14; // PART-TWO
  for (let i = 0; i + inputLength <= data.length; i++) {
    const array = data.slice(i, i + inputLength);
    const set = new Set(array);
    if (array.length === set.size) {
      console.log(i + inputLength);
      break;
    }
  }
};
