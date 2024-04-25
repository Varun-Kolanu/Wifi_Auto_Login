function fillInLoginForm() {
  let storageAPI = null;
  // Check browser compatibility and use appropriate storage API

  if (typeof browser !== "undefined" && browser.storage) {
    // firefox
    storageAPI = browser.storage.sync;
  } else if (typeof chrome !== "undefined" && chrome.storage) {
    // chrome
    storageAPI = chrome.storage.sync;
  } else if (typeof msBrowser !== "undefined" && msBrowser.storage) {
    // edge
    storageAPI = msBrowser.storage.sync;
  }

  if (!storageAPI) {
    console.log("Storage API not supported");
    return;
  }

  storageAPI.get(["username", "password"], function (result) {
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

document.addEventListener("DOMContentLoaded", function () {
  fillInLoginForm();
});
