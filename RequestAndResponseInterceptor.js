const originalFetch = window.fetch;

window.fetch = async (...args) => {
  const updatedRequest = requestInterceptor(args);
  const response = await originalFetch(...updatedRequest);
  const updatedResponse = responseInterceptor(response);
  return updatedResponse;
};

window.requestInterceptor = (args) => {
  //It will do certain updates and return the updated request
  console.log("In Request Interceptor");
  return args;
};

window.responseInterceptor = (response) => {
  console.log("In Response Interceptor");
  return response.json();
};

//This is for showing the working of above code.
fetch("https://jsonplaceholder.typicode.com/todos/1").then((response) => {
  console.log(response);
});
