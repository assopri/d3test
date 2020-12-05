![[Pasted image 20201107211130.png]]
свойство можно ассоциироваь с переменной

https://youtu.be/b6Ac0jcqJIg?t=900
что значит реактивно связаные свойства - если меняется значение - DOM перерисыова

замена значения переменной "на лету" в Chrome инструментах разработчика F12 ![[Pasted image 20201107211504.png]]

свойства вью могут быть использованы внутри тегов , атакже в их атрибутах https://youtu.be/b6Ac0jcqJIg?t=1047
но для этого надо юзать префиксы

во вью, атрибуты которые принадлежат вью - называются директивами. Перед любым атрибутом можно добавить v-bind https://youtu.be/b6Ac0jcqJIg?t=1088
это ДИНАМ атрибут. то естьв нем можно использовать js код. поэтому текст надо заключать в одинарные кавычки
#question директива - сам v-bind или полностью с атрибутом к котором он прицепляется?

условия https://youtu.be/b6Ac0jcqJIg?t=1298 v-if

template как обертка ![[Pasted image 20201107213821.png]] , чтобы не повторять условия

v-show аналог v-if только элемент все равно остается присутсоввтаь в доме https://youtu.be/b6Ac0jcqJIg?t=1599 , просто с атрубутом hidden

работа с динамической директивной директивной class https://youtu.be/b6Ac0jcqJIg?t=1690
позволяет определить набор классов для текущего элемента, дефолтные (которые всегда) и динамическиек
 <tr :key="i" v-for="(element, i) in subTitles" :class="{
                    'selected-table-row': i === acitveElementId,
                  }" 

можно даже определять класс тернарынм условием https://youtu.be/b6Ac0jcqJIg?t=1764 (отображ тот или иной клас в завис от результата УСЛОВИЯ). его заключаем в тернарные скобки

аналогично классам со style https://youtu.be/b6Ac0jcqJIg?t=1834

создание прогресс бара https://youtu.be/b6Ac0jcqJIg?t=1882

массивы, генерация строк таблиц или списков https://youtu.be/b6Ac0jcqJIg?t=1890

v-for там где хотим чтобы элемент повторялся https://youtu.be/b6Ac0jcqJIg?t=1953
отображение индекса https://youtu.be/b6Ac0jcqJIg?t=2012

вывод ассоц массива https://youtu.be/b6Ac0jcqJIg?t=2022 , вывод таблицы из массива
<ul>
    <li v-for="(item, index) in list">ind:{{index}}: {{item}}</li>
  </ul>

  <ul>
    <li v-for="(user, index) in users">ind:{{index}}:{{user.id}}:{{user.name}}</li>
  </ul>

  <table>
    <thead>
      <th>index</th><th>id</th><th>name</th>
    </thead>
      <tr v-for="(user,index) in users">
        <td>{{index}}</td><td>{{user.id}}</td><td>{{user.name}}</td>
      </tr>
  </table>

глаголы - методы при нажатии на кнопки и тт д https://youtu.be/b6Ac0jcqJIg?t=2100 опция methods

способы объявления методов https://youtu.be/b6Ac0jcqJIg?t=2135

выполнение логики вместо функции в директиве событие https://youtu.be/b6Ac0jcqJIg?t=2245

жизненный цикл https://youtu.be/b6Ac0jcqJIg?t=2291 https://ru.vuejs.org/v2/guide/instance.html#%D0%A5%D1%83%D0%BA%D0%B8-%D0%B6%D0%B8%D0%B7%D0%BD%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE-%D1%86%D0%B8%D0%BA%D0%BB%D0%B0-%D1%8D%D0%BA%D0%B7%D0%B5%D0%BC%D0%BF%D0%BB%D1%8F%D1%80%D0%B0

использовать хук жизненного цикла после создания экзземляпра
https://youtu.be/b6Ac0jcqJIg?t=2334 (анонимная функция)

обращение из функций жизнен цикла или методов к свойствам или другим методам. используем this https://youtu.be/b6Ac0jcqJIg?t=2351
в дереве элементов контекст не используется (this нельзя юзать у шаблоне)

асинхронность async https://youtu.be/b6Ac0jcqJIg?t=2622 (хороший пример)

ассоциатив массив в свойстве data https://youtu.be/b6Ac0jcqJIg?t=2784

использование промисов https://youtu.be/b6Ac0jcqJIg?t=2868

для чего нужны callback и стрелочная функция https://youtu.be/b6Ac0jcqJIg?t=2996
в callback не удобно, что везде свой контекст и не можем обратиться к this
стрелочные функции в отличии от callback используют контекст окружающего объекта https://youtu.be/b6Ac0jcqJIg?t=3135



пример через промис
const promise = axios.get(this.url.cities);

          console.log(promise);
          promise.then((responce)=>{
              this.cities = responce.data;
          });
		  
		  объект наблюдатель
https://youtu.be/b6Ac0jcqJIg?t=3335

v-model https://youtu.be/b6Ac0jcqJIg?t=3389 двунаправленное связывание данных

#question  чем отличается от v-bind - послед не дает двунаправл?
#todo 

базовое про компоненты

в конечном продукте весь кода в  один файл https://youtu.be/b6Ac0jcqJIg?t=3642 с помощью вебпака в один или 2 файла
