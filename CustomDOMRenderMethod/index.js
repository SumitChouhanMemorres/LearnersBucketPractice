const dom = {
  type: "div",
  props: { id: "Hello" },
  children: [{ type: "h1", children: "HELLO" }],
};

const generateDOM = (domObj, entry) => {
  const helper = (obj) => {
    const { type, props, children } = obj;
    const el = document.createElement(type);
    if (props) {
      for (let property in props) {
        el[property] = props[property];
      }
    }
    if (typeof children === "string") {
      el.innerHTML = children;
    } else {
      //We are doing this step because we want the render to happen as less time as possible. so we are creating a fragment and we will append that fragment to reduce number of renders
      const fragment = document.createDocumentFragment();
      for (let child of children) {
        fragment.appendChild(helper(child, entry));
      }
      el.appendChild(fragment);
    }
    return el;
  };
  const generatedDOM = helper(domObj);
  entry.appendChild(generatedDOM);
};

const entry = document.getElementById("root");
generateDOM(dom, entry);
