const fs = require("fs");

const fileName = "input.txt";

fs.readFile(fileName, "utf-8", (err, data) => {
  getScore(data);
});

const getScore = (data) => {
  const array = data.split("\n").map((input) => input.replace("\r", ""));
  const array2 = array.map((round) => round.split(" "));
  const array3 = array2.map((round) => getTypePoints(round[1]) + getWinCond(round[0], round[1]));
  const array4 = array2.map((round) => getTypePoints(addCheat(round[0], round[1])) + getWinCond(round[0], addCheat(round[0], round[1])));

  const result = array3.reduce((partial, a) => partial + a, 0);
  const result2 = array4.reduce((partial, a) => partial + a, 0);

  console.log("1a:", result);
  console.log("1b:", result2);
};

const getWinCond = (playerA, playerB) => {
  // A, X = Rock, B, Y = Paper, C, Z = Scis

  if ((playerA === "A" && playerB === "Y") || (playerA === "B" && playerB === "Z") || (playerA === "C" && playerB === "X")) {
    return 6;
  } else if ((playerA === "A" && playerB === "X") || (playerA === "B" && playerB === "Y") || (playerA === "C" && playerB === "Z")) {
    return 3;
  }
  return 0;
};

const getTypePoints = (input) => {
  if (input === "X") return 1;
  if (input === "Y") return 2;
  if (input === "Z") return 3;
};

const addCheat = (input1, input2) => {
  if (input2 === "Y") {
    if (input1 === "A") return "X";
    if (input1 === "B") return "Y";
    if (input1 === "C") return "Z";
  }
  if (input2 === "X") {
    if (input1 === "A") return "Z";
    if (input1 === "B") return "X";
    if (input1 === "C") return "Y";
  }
  if (input2 === "Z") {
    if (input1 === "A") return "Y";
    if (input1 === "B") return "Z";
    if (input1 === "C") return "X";
  }
};
