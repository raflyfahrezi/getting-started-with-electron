const url = require('url')
const path = require('path')
const { app, Menu, BrowserWindow } = require('electron')

let mainWindow = null
let addItemWindow = null

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

    mainWindow.on('closed', () => {
        app.quit()
    })

    // Build Menu Template
    const menu = Menu.buildFromTemplate(menuTemplate)

    // Implement Menu Template
    Menu.setApplicationMenu(menu)
})

const addItemWindowFunction = () => {
    // Initialize mainWindow with BrowserWindow
    addItemWindow = new BrowserWindow({
        width: 300,
        height: 300,
    })

    // Load index.html
    addItemWindow.loadURL(
        url.format({
            slashes: true,
            protocol: 'file',
            pathname: path.join(__dirname, 'view/add.html'),
        })
    )
}

const menuTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Add New Item',
                click() {
                    addItemWindowFunction()
                },
            },
            { label: 'Clear all items' },
        ],
    },
    {
        label: 'Quit',
        accelerator: 'Ctrl+Q',
        click() {
            app.quit()
        },
    },
]
