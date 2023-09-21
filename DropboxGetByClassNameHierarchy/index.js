const getByClassNameHierarchy = (root, className) => {
  const classes = className.split(">");
  const result = [];
  traverseDom(root, classes, 0, result);
  return result;
};

const traverseDom = (element, classes, index, result) => {
  const targetClass = classes[index];
  if (index === classes.length - 1 && element.classList.contains(targetClass)) {
    result.push(element.id);
    return;
  }
  for (let child of element.children) {
    if (element.classList.contains(targetClass)) {
      traverseDom(child, classes, index + 1, result);
    } else {
      traverseDom(child, classes, 0, result);
    }
  }
};

const root = document.getElementById("a-1");
console.log(getByClassNameHierarchy(root, "a>b"));
