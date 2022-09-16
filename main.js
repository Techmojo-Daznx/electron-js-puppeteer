// main.js

// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron');

const createWindow = () => {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        }
    })

    // and load the index.html of the app.
    mainWindow.loadFile('index.html');

    /* Opening the dev tools. */
    mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
    createWindow()
})