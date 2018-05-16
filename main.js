const {app, BrowserWindow} = require("electron");
const path = require("path");
const url = require("url");

const windows = [];

function createWindow(parent) {
  const win = new BrowserWindow({width: 800, height: 600, parent: parent});

  win.loadURL(url.format({
    pathname: path.join(__dirname, "index.html"),
    protocol: "file",
    slashes: true
  }));

  win.on("closed", () => windows.splice(0, windows.length));

  createWindow(win);
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});
