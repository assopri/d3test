frontend process in [[Electron]]

The ipcRenderer module is an instance of the EventEmitter class. It provides a few methods so you can send synchronous and asynchronous messages from the render process (web page) to the main process. You can also receive replies from the main process.