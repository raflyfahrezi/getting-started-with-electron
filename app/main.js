const url = require('url')
const path = require('path')
const { app, BrowserWindow } = require('electron')

let mainWindow = null

app.on('ready', () => {
    // Initialize mainWindow with BrowserWindow
    mainWindow = new BrowserWindow({})
})
