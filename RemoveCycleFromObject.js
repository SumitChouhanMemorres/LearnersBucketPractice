const List = function (val) {
  this.val = val;
  this.next = null;
};

const list1 = new List(10);
const list2 = new List(20);
const list3 = new List(30);

list1.next = list2;
list2.next = list3;
list3.next = list1;

// console.log(JSON.stringify(list1)); //This will give error stating "Converting circular object to string"

const removeCircle = (obj) => {
  const store = new WeakSet([obj]); //This is to store the object in set
  function helper(obj) {
    for (let key in obj) {
      console.log(key);
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === "object") {
          if (store.has(obj[key])) {
            obj[key] = null;
          } else {
            store.add(obj[key]);
            helper(obj[key]);
          }
        }
      }
    }
  }
  helper(obj);
};

removeCircle(list1);
console.log(list1);
