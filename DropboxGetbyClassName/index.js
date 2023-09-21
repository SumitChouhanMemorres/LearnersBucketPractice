function getByClassName(root, id) {
  const search = (node) => {
    let result = [];
    if (node.classList.contains(id)) {
      result.push(node.id);
    }
    for (let child of node.children) {
      const res = search(child);
      result = [...result, ...res];
    }
    return result;
  };
  return search(root);
}

const root = document.getElementById("root");
console.log(getByClassName(root, "a"));
