шаблон с serve (вместо него dev)
	webpack компилить обычные js файлы и он умеет компилить их в реальном времени
	electron заготовка dev
	https://github.com/electron-userland/electron-webpack-quick-start
	
	Олег Белохохлов, [21.11.20 11:25]
это конфигурация для запуска

Олег Белохохлов, [21.11.20 11:26]
app.commandLine.appendSwitch('remote-debugging-port', '9222')
app.commandLine.appendSwitch('userDataDir', true)
эти строчки добавь после импортов в main

Олег Белохохлов, [21.11.20 11:26]
нашел тут: https://github.com/electron-userland/electron-webpack/issues/76

Олег Белохохлов, [21.11.20 11:26]
работать будет только для шаблона electron-webpack

---
launch json
`
{
    // Use IntelliSense to learn about possible attributes.
    // Hover to view descriptions of existing attributes.
    // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
    "version": "0.2.0",
    "configurations": [
        // Configuration from https://github.com/electron-userland/electron-webpack/issues/80.
        {
            "name": "Electron Webpack: Dev",
            "type": "node",
            "request": "launch",
            "cwd": "${workspaceFolder}",
            "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/electron-webpack",
            "args": [
                "dev"
            ],
            "env": {
                "DEBUG": "*",
                "ELECTRON_DISABLE_SECURITY_WARNINGS": "1",
                "NODE_ENV": "development",
            },
            "autoAttachChildProcesses": true,
            "runtimeArgs": [
                "--remote-debugging-port=9222",
                "--userDataDir=true",
            ],
            "trace": false,
            // "console": "internalConsole",
            // "outputCapture": "std",
            "sourceMaps": true,
            "smartStep": true,
            "showAsyncStacks": true,
        },
    ]
}
`
---
custom.additions.webpack.js (в КОРНЕ)
`
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    plugins: 
    [new HtmlWebpackPlugin({template: './src/renderer/index.html', filename: 'index.html'})]
}
`

в Package.json добавляем
`
  },
  "electronWebpack": {
    "main": {
      "webpackConfig": "custom.additions.webpack.js"
    },
  
    "renderer": {
      "webpackConfig": "custom.additions.webpack.js",
      "webpackDllConfig": "custom.additions.webpack.js"
    }
  }
}
`

index.js очищаем

+ typescript https://webpack.electron.build/add-ons#typescript