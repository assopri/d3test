
function createMainWindow() {
  const window = new BrowserWindow({webPreferences: {nodeIntegration: true},
    width : 300,
  height: 150})
  window.setAlwaysOnTop(true, 'screen');
  