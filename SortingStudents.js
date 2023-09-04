const data = [
  {
    id: 1,
    name: "A",
    age: 10,
    marks: 28,
  },
  {
    id: 3,
    name: "B",
    age: 4,
    marks: 54,
  },
  {
    id: 2,
    name: "C",
    age: 73,
    marks: 85,
  },
  {
    id: 4,
    name: "D",
    age: 43,
    marks: 23,
  },
];

const customSortingFunction = (data, sortingOnBasis) => {
  const { key, asc } = sortingOnBasis;
  return data.sort((a, b) => {
    if (asc) {
      return a[key] - b[key];
    } else {
      return b[key] - a[key];
    }
  });
};

console.log(customSortingFunction(data, { key: "id", asc: true }));
