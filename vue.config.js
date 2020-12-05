module.exports = {
  devServer: {
    hot: false,
    liveReload: true,
  },
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        win: {
          target: ['portable', {
            target: 'nsis',
          }],
        },
        linux: {
          target: ['appimage'],
        },
        nsis: {
          oneClick: false,
          allowToChangeInstallationDirectory: true,
        },
      },
    },
  },
};
