const fs = require("fs");

const fileName = "input.txt";
const stacksCount = 9;

fs.readFile(fileName, "utf-8", (err, data) => {
  const array = data.split("\n").map((i) => i.replace(/(\r\n|\n|\r)/gm, ""));
  const allStacks = array.slice(0, stacksCount).map((stack) => stack.split(""));
  const allOps = array.slice(stacksCount + 1);
  moveContainers(allStacks, allOps);
});

const moveContainers = (stacks, ops) => {
  ops.forEach((op) => {
    const moveCount = Number(op.match(/\d{1,2}/g)[0]);
    const fromStack = Number(op.match(/\d{1,2}/g)[1]) - 1;
    const toStack = Number(op.match(/\d{1,2}/g)[2]) - 1;

    console.log(op, moveCount, fromStack, toStack);
    const moveBlocks = stacks[fromStack].splice(stacks[fromStack].length - moveCount);
    // stacks[toStack].push(...moveBlocks.reverse());  For Part One
    stacks[toStack].push(...moveBlocks); // Part Two
  });
  console.log(stacks.map((stack) => stack.slice(-1)));
};

/**
 * [[], [], []]
 */
