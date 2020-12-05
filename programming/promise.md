
var promise = new Promise(function(resolve, reject) {
  // Эта функция будет вызвана автоматически

  // В ней можно делать любые асинхронные операции,
  // А когда они завершатся — нужно вызвать одно из:
  // resolve(результат) при успешном выполнении
  // reject(ошибка) при ошибке
})



await вовзращает результат промиса

async function isFirstTimeLoaded()
{
    console.log("isFirstTimeLoaded start");
    
    let retVal = await ipcRenderer.invoke("is-first-time-loaded");

    console.log("isFirstTimeLoaded returned: "+retVal);
    
    return retVal;
}

window.onload  = async () => {
    
    let res = JSON.parse(await isFirstTimeLoaded());
    console.log(res);
	
	
	