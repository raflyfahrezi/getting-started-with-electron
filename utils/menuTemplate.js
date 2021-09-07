const { app } = require('electron')

const menu = [
    {
        label: 'File',
        submenu: [{ label: 'Add New Item' }, { label: 'Clear all items' }],
    },
    {
        label: 'Quit',
        accelerator: 'Ctrl+Q',
        click() {
            app.quit()
        },
    },
]

module.exports = menu
