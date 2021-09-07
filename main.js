const url = require('url')
const path = require('path')
const { app, Menu, BrowserWindow } = require('electron')

const { menuTemplate } = require('./utils')

let mainWindow = null

app.on('ready', () => {
    // Initialize mainWindow with BrowserWindow
    mainWindow = new BrowserWindow({})

    // Load index.html
    mainWindow.loadURL(
        url.format({
            slashes: true,
            protocol: 'file',
            pathname: path.join(__dirname, 'view/index.html'),
        })
    )

    // Build Menu Template
    const menu = Menu.buildFromTemplate(menuTemplate)

    // Implement Menu Template
    Menu.setApplicationMenu(menu)
})
