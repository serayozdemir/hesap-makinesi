//uygulamayı electron üzerinde çalıştırmak için gereken 
//derleme kodlarını ve tray kodlarını ekledik.
const { app, BrowserWindow, ipcMain, Menu, Tray } = require('electron')
const path = require('path');
let win;
let tray = null;
const createWindow = () => {
    win = new BrowserWindow({
      width: 346,
      height:421,
      webPreferences: {
        nodeIntegration:true,
        contextIsolation:false
      },
      autoHideMenuBar: true,
    })
    win.loadFile('index.html')
  }
  app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })
  app.whenReady().then(() => {
    tray = new Tray('hesap_mak_logo.jpg')
    const contextMenu = Menu.buildFromTemplate([
      {
        label: 'Kapat',
        type: 'normal',
        click: function () {
          app.exit();
        }
      }
    ])
    tray.setToolTip('Bilimsel Hesap Makinesi')
    tray.setContextMenu(contextMenu)
    tray.on('double-click', function (e) {
      win.show();
    });
  })  