document.addEventListener("DOMContentLoaded", function () {
  const saveButton = document.getElementById("save");

  saveButton.addEventListener("click", function () {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check browser compatibility and use appropriate storage API
    let storageAPI = null;
    if (typeof browser !== "undefined" && browser.storage) {
      storageAPI = browser.storage.sync;
    } else if (typeof chrome !== "undefined" && chrome.storage) {
      storageAPI = chrome.storage.sync;
    } else if (typeof msBrowser !== "undefined" && msBrowser.storage) {
      storageAPI = msBrowser.storage.sync;
    }

    if (!storageAPI) {
      console.log("Storage API not supported");
      return;
    }

    storageAPI.set({ username, password }, function () {
      console.log("Credentials saved");
    });
  });

  // Load stored credentials
  let storageAPI = null;
  if (typeof browser !== "undefined" && browser.storage) {
    storageAPI = browser.storage.sync;
  } else if (typeof chrome !== "undefined" && chrome.storage) {
    storageAPI = chrome.storage.sync;
  } else if (typeof msBrowser !== "undefined" && msBrowser.storage) {
    storageAPI = msBrowser.storage.sync;
  }

  if (!storageAPI) {
    console.log("Storage API not supported");
    return;
  }

  storageAPI.get(["username", "password"], function (result) {
    if (result.username) {
      document.getElementById("username").value = result.username;
    }
    if (result.password) {
      document.getElementById("password").value = result.password;
    }
  });
});
