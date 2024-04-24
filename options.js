document.addEventListener("DOMContentLoaded", function () {
  const saveButton = document.getElementById("save");

  saveButton.addEventListener("click", function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    chrome.storage.sync.set({ username, password }, function () {
      console.log("Credentials saved");
    });
  });

  // Load stored credentials
  chrome.storage.sync.get(["username", "password"], function (result) {
    if (result.username) {
      document.getElementById("username").value = result.username;
    }
    if (result.password) {
      document.getElementById("password").value = result.password;
    }
  });
});
