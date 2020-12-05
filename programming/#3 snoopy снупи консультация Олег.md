https://www.youtube.com/watch?v=gLiOQGgfFVw&feature=youtu.be

preload при создании окна createwindow (явным образом)
https://youtu.be/gLiOQGgfFVw?t=558 в webPreferences
win = new BrowserWindow({
        // width:400,
        // height:400,
        // maxWidth:600,
        // maxHeight:600,
        // backgroundColor: '#228822',
        //frame:false,
        userAgent: 'Chrome/86.0.4240.183',
        title: "adf",
        webPreferences:{
            preload: path.join(__dirname, 'inject.js'),
        }
    });
	
	electron взаимодествие с DOM
	https://youtu.be/gLiOQGgfFVw?t=1170
	
	отправка события из инъекции в рендерер (окно эхлектрона)
	https://youtu.be/gLiOQGgfFVw?t=1261 , если используем webview
	
	если
	
	https://youtu.be/gLiOQGgfFVw?t=1251 Если мы делаем sendtohost - мы действительно передаем из страницы (которая в webview) в рендерер (обрабатываем событие унас в Home). А вот если мы с другой стороны сделали страницу без webivew (грузим вебстраницу и подсоединяем к ней инъекцию), то в данном случае из ipcRenderer.send мы передаем нодовскому процессу сообщение
	
	https://youtu.be/gLiOQGgfFVw?t=1310
	[[шаблон с serve electron-webpack-quick-start]]
	
	
	как взяли либу редактора и всунули в наш проект https://youtu.be/gLiOQGgfFVw?t=1563
	
	взаимодействие editorjs и вью, DOM дерева
	https://youtu.be/gLiOQGgfFVw?t=1848
	
	
	editorRef может понадоисят в других компонентах https://youtu.be/gLiOQGgfFVw?t=1990
	
	поэтому вынесли реф за пределых TextEditor.vue
	
	метод дл ядобавления текста в editor
	https://youtu.be/gLiOQGgfFVw?t=2013
	
	также в HomeVue импортируем и ретерним
	https://youtu.be/gLiOQGgfFVw?t=2062
	
	вебсторм - работа с незакомиченными изменениями https://youtu.be/gLiOQGgfFVw?t=2199
	
	восстановление состояния https://youtu.be/gLiOQGgfFVw?t=2391
	
	https://youtu.be/gLiOQGgfFVw?t=2424
	ipcMain.handle можно пределить удаленную процедуру которую мжно исполнить и она тчо то вернет
	удаленная = исполняется в нодовском процессе, НО выполняется из окна браузера. по факту - позволяет сэкономить время не определяя всех конструкций отправки/получения событий

	  const launchUrl = await ipcRenderer.invoke('loadState') || 'https://www.youtube.com/';
	  проверка загруженности страницы webView.value.addEventListener('dom-ready', async () => {
	  решения вопроса чтобы многократно не перезагружался https://youtu.be/gLiOQGgfFVw?t=2520
	  
	  если invoke вернула null, ставим ютуб по умолчанию
	  const launchUrl = await ipcRenderer.invoke('loadState') || 'https://www.youtube.com/';
	  
	  https://youtu.be/gLiOQGgfFVw?t=2669
	  watch vs computed
	  если кейс про get set - это computed
	  computed вызывается тольког в момент когда потребуется это свйоство
	  если же он используется в v-model , он будет отслеживаться. ГЛАВНОЕ - если компонент не смонтирован (с computed), то он вычисляться не будет
	  https://youtu.be/gLiOQGgfFVw?t=2770 так работает выражение в фильтре. Если оно меняется, то компьютер понимает, что нужно пересчитаться
	  const subTitles = computed(() => {
      if (filterText.value === '') return getSubTitles.value;
      return getSubTitles.value.filter((e) => e.Text.includes(filterText.value));
    });
	но subtitles - это компьюте, его по факту не существует
	сабт зависит от набора переменных, когда перемеменяется https://youtu.be/gLiOQGgfFVw?t=2822 - надо пересчитать subtitles
	в каком случае надо использовать watch https://youtu.be/gLiOQGgfFVw?t=2847
	watch отслежи изменения на объекте и просто выполняет действия (computed предполага возврат значения) И комьютед не будет вызват если нигде не задейств в монтир
	
	https://youtu.be/gLiOQGgfFVw?t=2951
	специфицеский синтаксис  <tr :key="i" v-for="(element, i) in subTitles" :class="{
                    'selected-table-row': i === acitveElementId,
                  }" :ref="el => { subTitleElements[i] = el }">
	
	[[composition API]]
		в качестве рефа хотим массви tr
	явным образом надо записать в каждый элемент subTitleElements[i] = el
	subTitleElements вообще нужны чтобы по ним скролить
	 watch(getActiveElement, () => {
      if (!subTitleElements.value || filterText.value !== ''
      || !subTitleElements.value[getActiveElement.value]) return;
      subTitleElements.value[getActiveElement.value].scrollIntoView();
    }); //	https://youtu.be/gLiOQGgfFVw?t=3067 когда синий выделенный элемент вышел за границы
	
	содержимое паблика не входит в компил (настройка из коробки)
	https://youtu.be/gLiOQGgfFVw?t=3116
	
	setcurrenttime
	
	onmounted - событие Vue jsddd https://youtu.be/gLiOQGgfFVw?t=3211
	
	механика fetchsubs https://youtu.be/gLiOQGgfFVw?t=3329
	
	export default router https://youtu.be/gLiOQGgfFVw?t=3416
	если надо несколько файлов связать, то они связываются через import export (в typescript)
	где импортируем router компонент
	
	router-view системное название port default rout