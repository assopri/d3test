[[Electron]] backend process
-[[ipcRenderer]]


The ipcMain module is an instance of the EventEmitter class. When used in the main process, it handles asynchronous and synchronous messages sent from a renderer process (web page). Messages sent from a renderer will be emitted to this module.

а отправка через win.webContents.send (из бекграунда)