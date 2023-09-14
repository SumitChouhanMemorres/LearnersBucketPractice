//This is a helper function which finds the rgb value of provided color by calling browser methods
const getComputedColor = (colorCode) => {
  const div = document.createElement("div");
  div.style.color = colorCode;
  document.body.appendChild(div);
  const computedStyle = window.getComputedStyle(div);
  const { color } = computedStyle;
  document.body.removeChild(div);
  return color;
};

const findElement = (root, colorCode) => {
  const standardColor = getComputedColor(colorCode);
  const output = [];
  const search = (ele) => {
    const eleColor = ele.style.color;
    const eleComputedColor = getComputedColor(eleColor);
    if (eleComputedColor === standardColor) {
      output.push(ele);
    }
    for (let child of ele.children) {
      search(child);
    }
  };
  search(root);
  return output;
};

const root = document.getElementById("root");
console.log(findElement(root, "red"));
