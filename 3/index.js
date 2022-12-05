const fs = require("fs");

const fileName = "input.txt";

fs.readFile(fileName, "utf-8", (err, data) => {
  const array = data.split("\n").map((i) => i.replace(/(\r\n|\n|\r)/gm, ""));
  getPrio(array);
  getGroupPrio(array);
});

// +++ get strings
// +++ split them in half -> two arrays
// +++ find dublicate
// get priority of that value

const getPrio = (data) => {
  const splitted = data.map((rucksack) => [rucksack.substring(0, rucksack.length / 2), rucksack.substring(rucksack.length / 2)]);
  const intersec = splitted.flatMap((rucksack) => {
    const rl = rucksack[0].split("");
    const rr = rucksack[1].split("");
    const result = rl.filter((item) => rr.includes(item));
    return [...new Set(result)];
  });
  const result = intersec.map((item) => getPrioForValue(item)).reduce((prev, a) => prev + a, 0);
  console.log(result);
};

const getGroupPrio = (data) => {
  let splitByThree = [];
  while (data.length > 0) {
    splitByThree.push(data.splice(0, 3));
  }

  const intersec = splitByThree.flatMap((rucksack) => [
    ...new Set(
      rucksack[0].split("").filter((item) =>
        rucksack[1]
          .split("")
          .filter((item) => rucksack[2].split("").includes(item))
          .includes(item)
      )
    ),
  ]);
  const result = intersec.map((item) => getPrioForValue(item)).reduce((prev, a) => prev + a, 0);
  console.log(result);
};

const getPrioForValue = (value) => {
  if (value == value.toLowerCase()) {
    return value.charCodeAt(0) - 96;
  }
  return value.charCodeAt(0) - 38;
};
