const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));


let startDate;
let timerBusy = false;

async function waitPomodoroSession(seconds)
{
  
  startDate = Math.floor(Date.now()/1000);
  timerBusy = true;
  
  //console.log("startDate = "+startDate);
  
  let timer = setInterval(function(){ 
        let timeNow = Math.floor(Date.now()/1000);
        let dif = Math.abs(timeNow - startDate);
        //console.log("tick  = "+timeNow);
        
        tray.setToolTip('Launched and passed '+dif+' seconds of '+seconds);

        if(dif > seconds){
          timerBusy = false;
          tray.setToolTip('Stoped');
          //console.log(dif + ">" + seconds + " stop timer");
          clearInterval(timer);
        }   
        else{
          //console.log(dif + "<" + seconds + "  timer goes on");
        }    
      }, 
    1000);

    while(timerBusy)  
    {
      //console.log("waiting while timer released");
      await sleep(1000);
    }

    //console.log(" timer released");
  
}