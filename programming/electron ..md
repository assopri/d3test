to launch electron app

### create installer
electron-installer-windows --src /Snoopy-win32-x64/ --dest /installers/

https://www.youtube.com/watch?v=KDVahubc_54&t=1s

### create exe
electron-packager ./ --platfrom=win32 --arch=x64 --overwrite Pomodoro


npm install electron-wix-msi --save-dev

https://ourcodeworld.com/articles/read/927/how-to-create-a-msi-installer-in-windows-for-an-electron-framework-application
![[Pasted image 20201104065255.png]]
![[Pasted image 20201104065303.png]]