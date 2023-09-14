window.localStorageWithExpiryTime = {
  setItem: function (key, value, expiryTime) {
    let result = {
      value,
      expiryTime: Date.now() + expiryTime,
    };
    localStorage.setItem(key, JSON.stringify(result));
  },
  getItem: function (key) {
    let data = localStorage.getItem(key);
    data = JSON.parse(data);
    if (data.expiryTime <= Date.now()) {
      localStorage.removeItem(key);
      return null;
    }
    return data.value;
  },
  removeItem: function (key) {
    localStorage.removeItem(key);
  },
  clear: function () {
    localStorage.clear();
  },
};

localStorageWithExpiryTime.setItem("abc", "pqr", 2000);
