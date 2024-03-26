const {app, BrowserWindow} = require("electron");

let mainWindow = null;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    autoHideMenuBar: true,
    backgroundColor: "black",
    icon: __dirname + "/hyperloop.ico",
    show: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  mainWindow.maximize();
  mainWindow.show();
  mainWindow.loadFile("main.html");
  // Open the DevTools.
  mainWindow.webContents.openDevTools()
};

// When app is ready, create a window
app.whenReady().then(createWindow);

// When all windows are closed, quit the application
app.on('window-all-closed', () => {
  if (process.platform !== "darwin"){
    app.quit()
  }
});

// When application is activated, open default window
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0){
    createMainWindow()
  }
});

const {app, BrowserWindow} = require("electron");

let mainWindow = null;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    autoHideMenuBar: true,
    backgroundColor: "black",
    icon: __dirname + "/hyperloop.ico",
    show: false,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  mainWindow.maximize();
  mainWindow.show();
  mainWindow.loadFile("main.html");
  // Open the DevTools.
  mainWindow.webContents.openDevTools()
};

// When app is ready, create a window
app.whenReady().then(createWindow);

// When all windows are closed, quit the application
app.on('window-all-closed', () => {
  if (process.platform !== "darwin"){
    app.quit()
  }
});

// When application is activated, open default window
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0){
    createMainWindow()
  }
});