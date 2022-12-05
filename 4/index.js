const fs = require("fs");

const fileName = "input.txt";

fs.readFile(fileName, "utf-8", (err, data) => {
  const array = data.split("\n").map((i) => i.replace(/(\r\n|\n|\r)/gm, ""));
  fullyContained(array);
});

const fullyContained = (data) => {
  const tup = data.map((pair) =>
    pair.split(",").map((item) => {
      const fromTo = item.split("-").map((item) => Number(item));
      return { start: fromTo[0], end: fromTo[1] };
    })
  );
  const verified = tup.map((pair) => isIncluded(pair[0], pair[1])).reduce((total, x) => total + (x == true), 0);
  const overlapping = tup.map((pair) => isOverlapping(pair[0], pair[1])).reduce((total, x) => total + (x == true), 0);
  console.log(verified);
  console.log(overlapping);
};

const isIncluded = (a, b) => {
  if (a.start >= b.start && a.end <= b.end) return true;
  if (b.start >= a.start && b.end <= a.end) return true;
  return false;
};

const isOverlapping = (a, b) => {
  if (a.end < b.start) return false;
  if (b.end < a.start) return false;
  return true;
};

/**
 * 123......
 * ..345....
 *
 * ..345....
 * 123......
 *
 * .23456...
 * ..345....
 *
 * ..345....
 * .23456...
 *
 *
 */
