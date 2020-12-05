source https://www.youtube.com/watch?v=akOzxQbrmUY

Основы верстки
Олег Белохохлов, [08.11.20 13:01]
https://www.w3schools.com/html/default.asp



Олег Белохохлов, [08.11.20 13:01]
https://getbootstrap.com/docs/4.5/getting-started/introduction/

ctrl+shift+I на странице, чтобы увидеть где какой DIV

зачем проверяем if(webView.value!=null) https://youtu.be/akOzxQbrmUY?t=487
разница со ссылкой на просто строку и на вебэлемент https://youtu.be/akOzxQbrmUY?t=1526

настройка linter https://youtu.be/akOzxQbrmUY?t=656
"editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },

#question глубже разобратсья ка const fetchSubTitles обыгрывается currentUrl

доступ к DOM сайта (youtube в нашем случае) https://youtu.be/akOzxQbrmUY?t=1875
предложил все-таки подумать что ты
именно хочешь сделать не быть
действительны для этого необходим доступ
к дому происходит такая ситуация
inject.js, document.getElementId
inject отрабатывает при загрузке
страницы этого дара более детально
посмотреть тут я сходу не скажу возможно
на какой-нибудь бинду . unload
и смысл подписаться события волос но тут

https://youtu.be/akOzxQbrmUY?t=2019
ipcRenderer.on - это подписываемся на Ipc события,
https://youtu.be/akOzxQbrmUY?t=2048
а на события окна просто как ув браузере вроде window.onload=()=>{}
из других мест к DOM доступ не получу
контент webview не виден DOM
знаешь то есть на что если ты
встраиваешь какое-то фрейма другую
страницу то ты не имеешь доступ к
внутренностям фрейма потому что иначе
можно было бы дать устраивать сокращение

подписывание на клав сокращение https://youtu.be/akOzxQbrmUY?t=2121
https://youtu.be/akOzxQbrmUY?t=2200
надо в async create window, потому что там есть ссылка на win (окно, которому хотим отправить сообщение)
import {
  app, protocol, BrowserWindow, ipcMain, globalShortcut
} from 'electron';
...
  // globalShortcut.register('CommandOrControl+S', () => {
  //   console.log('CommandOrControl+S is pressed');
  //   win.webContents.send('')
  // });
  
Олег Белохохлов, [08.11.20 13:37]
CommandOrControl+X

Олег Белохохлов, [08.11.20 13:43]
https://keycode.info/

регистрация глобального сокращения https://youtu.be/akOzxQbrmUY?t=2293

но мы подписываемся на локальный (чтобы не перехватывать даже когда окно скрыто)
onMounted(() => {
      if (webView.value) {
        document.onkeypress = (e) => {
          if (e.ctrlKey && e.code === 'KeyS') {
            saveCurrentPiece();
            // if (webView.value)webView.value.goBack();
          }
          // if (e.ctrlKey && e.code === 'Backspace') {
          //   if (webView.value)webView.value.goBack(); // && webView.value.canGoBack()
          // }
        };

getActiveElement  -индекс текущего активного элемента массива субтитров

взаимимодействие background электрон (node js процесс исполняет background.ts - =лектроновская часть, исполняемая средствами node js) и браузерный процесс https://youtu.be/akOzxQbrmUY?t=3806
[[ipcMain]] и [[ipcRenderer]]

почему ловим через [[ipcMain]] а не через app
https://youtu.be/akOzxQbrmUY?t=3965
через [[ipcMain]] ловим событие от браузерного процесса, а через app обычные электрон события вроде окно закрылось

https://youtu.be/akOzxQbrmUY?t=4010
promise синтаксис -через :тип овзрващ значения, асинк функция всегда возр 
промис это дженерик от значения которое будет в нем лежать, когда он зарезолвится
null через черточку - вариант или (если произойдет косяк)

определение перменных консантами
https://youtu.be/akOzxQbrmUY?t=4124
не может поменяться ссылка на перем, но может меняться значение
если не планируем менять - делаем коснатной переменную