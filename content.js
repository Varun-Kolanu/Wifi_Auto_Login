function fillInLoginForm() {
  console.log("Hello");
  chrome.storage.sync.get(["username", "password"], function (result) {
    if (result.username && result.password) {
      console.log("Logging in...");
      document.getElementsByName("username")[0].value = result.username;
      document.getElementsByName("password")[0].value = result.password;
      document.querySelector('input[type="submit"]')?.click();
    } else {
      console.log("Error...");
    }
  });
}

fillInLoginForm();
