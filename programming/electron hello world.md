https://youtu.be/RL305ldfzm8?t=137
install electron
npm install electron --save-dev

https://youtu.be/RL305ldfzm8?t=197
describe npm start script for electron

#question почему скрипт не закончился а висит?
https://youtu.be/RL305ldfzm8?t=271

add basic html
https://youtu.be/RL305ldfzm8?t=620

#question как настроить serve

https://youtu.be/RL305ldfzm8?t=791
total

https://www.youtube.com/watch?v=yeYiuUONO9I&list=PLC3y8-rFHvwiCJD3WrAFUrIMkGVDE0uqW&index=3

'require()' is not defined.
All you have to do is to change the instance on (windowOne in the file main.js) to this :

winOne= new BrowserWindow({

        webPreferences: {

            nodeIntegration: true

        }

    });


one browser window creating another browser window https://youtu.be/yeYiuUONO9I?list=PLC3y8-rFHvwiCJD3WrAFUrIMkGVDE0uqW&t=765

показать окно только когда страница загружена
https://youtu.be/zq7GrAym-KI?list=PLC3y8-rFHvwiCJD3WrAFUrIMkGVDE0uqW&t=591

blocking vs non blocking ipc https://youtu.be/rX3axskesDw?list=PLC3y8-rFHvwiCJD3WrAFUrIMkGVDE0uqW&t=583

let timer = setInterval(() => {
    
    let pauseButton = document.getElementsByClassName("fa-pause")[0];
    
    if(document.location.href.includes("onlinetimer.ru") && !pauseButton)
    {
        clearInterval(timer);
        console.log("n1" + Date.now()/1000);

        //ipcRenderer.send("open-url","https://www.youtube.com/watch?v=2andxQSxOfw");
        ////alert("stop");
        let reply = ipcRenderer.sendSync("open-url","https://www.youtube.com/watch?v=2andxQSxOfw");
        console.log(reply);

        console.log("n2" + Date.now()/1000);
        //document.location.href="https://www.youtube.com/watch?v=2andxQSxOfw"; console.log("no pause");
    }

    ipcRenderer.on("just-test-sending-from-main",(event,msg)=>
    {
        console.log(event + ": "+ msg);
    })
    //else consol
	

const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));

ipcMain.on("open-url",async (event,url)=>{
    //open(url);
    console.log("m1");
    event.sender.send('just-test-sending-from-main',"someparam");
    await sleep(3000);
    console.log("m2");
event.returnValue ="syncreturn";

})

ожидание периода от начала работы

//else console.log(pauseButton);

    //let currentMoment = Date.now()/1000;;

    // if(Math.abs(currentMoment-startMoment)>5)
    // {
    //     console.log("tick +5");
    //     initIntervalPassed = true;
    //     //clearInterval(timer);
    // }
    // else{
    //     console.log("tick");
    // }
    
	
	при установке переменную трей надо делать глобальной
	
	https://youtu.be/6guMb33u7Kg?list=PLC3y8-rFHvwiCJD3WrAFUrIMkGVDE0uqW&t=230
	
	let tray = null;


function createWindow()
{

...

    console.log(iconPath);
    tray = new Tray(iconPath);

    let template = [
        {
          label: 'Audio',
          submenu: [
            {
              label: 'Low',
              type: 'radio',
              checked: true
            },
            {
              label: 'High',
              type: 'radio',
            }
          ]
        },
        {
          label: 'Video',
          submenu: [
            {
              label: '1280x720',
              type: 'radio',
              checked: true
            },
            {
              label: '1920x1080',
              type: 'radio',
            }
          ]
        }
      ];
    
      const contextMenu = Menu.buildFromTemplate(template);
      tray.setContextMenu(contextMenu);
      tray.setToolTip('Tray App');
}

отслеживание координат перемещения окна
 // win.on('move', (e) => {
    //     console.log( e.sender.getBounds() );
    //   })
	
	open file, open folder and select file, open webpage from renderer
	
	openBtn.addEventListener("click",()=>{
     shell.showItemInFolder("C:\\Users\\lofti\\Documents\\work\\text.txt");
     shell.openExternal("http://google.com");
     shell.openExternal('file://' + "C:\\Users\\lofti\\Documents\\work\\text.txt");
     
});