const {
    app,
    BrowserWindow
} = require('electron')



function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {

            devTools: false

        }

    })

    win.loadFile("index.html")
    win.removeMenu()
}
app.whenReady().then(() => {
    createWindow()

})