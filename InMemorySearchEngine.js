function InMemorySearchEngine() {
  this.entities = new Map();
  this.addDocuments = function (namespace, ...documents) {
    const existing = this.entities.get(namespace);
    if (existing) {
      this.entities.set(namespace, [...existing, ...documents]);
    } else {
      this.entities.set(namespace, [...documents]);
    }
  };
  this.search = function (namespace, filterFn, orderBy) {
    const documents = this.entities.get(namespace);
    const filtered = documents.filter(filterFn);
    if (orderBy) {
      const { key, asc } = orderBy;
      return filtered.sort((a, b) => {
        if (asc) {
          return a[key] - b[key];
        } else {
          return b[key] - a[key];
        }
      });
    }
    return filtered;
  };
}

const searchEngine = new InMemorySearch();
searchEngine.addDocuments(
  "Movies",
  { name: "Avengers", rating: 8.5, year: 2017 },
  { name: "Black Adam", rating: 8.7, year: 2022 },
  { name: "John Wick 4", rating: 8.2, year: 2023 },
  { name: "Black Panther", rating: 9.0, year: 2022 }
);

const result = searchEngine.search("Movies", (e) => e.rating >= 8.5, {
  key: "year",
  asc: true,
});

console.log(result);
