[[Unity 3d]]

## Lesson 1. Установка
https://www.youtube.com/watch?v=GGsOU7sP0r4

platform choice https://youtu.be/GGsOU7sP0r4?t=452

Resolution setup https://youtu.be/GGsOU7sP0r4?t=577

## Lesson 2. Создание основных объектов
https://www.youtube.com/watch?v=DCgDwKcb6-0

itproger.com

настройка камеры https://youtu.be/DCgDwKcb6-0?t=28
камера для 2d игр https://youtu.be/DCgDwKcb6-0?t=140

свет, тени https://youtu.be/DCgDwKcb6-0?t=291

создание платформы (плоскости) https://youtu.be/DCgDwKcb6-0?t=366

установка материала платформе https://youtu.be/DCgDwKcb6-0?t=467

вращение камеры покруг платформы в процессе игры https://youtu.be/DCgDwKcb6-0?t=557

задать редактор скриптов по умолчанию https://youtu.be/DCgDwKcb6-0?t=737

создание public переменной чтобы значение менять в Unity https://youtu.be/DCgDwKcb6-0?t=796

написание кода для Unity программирование https://youtu.be/DCgDwKcb6-0?t=874
Update вызывается каждый фрейм #question (непостоянное значение но около 60 в секунду)

![[Pasted image 20201017191610.png]]
сглаживание любого действия по фреймам за счет Time.deltaTime

https://youtu.be/DCgDwKcb6-0?t=963 надо сохранить скрипт чтобы он прогрузился в unity
а еще - поместит скрипт в объект ![[Pasted image 20201017191945.png]]

запуск игры https://youtu.be/DCgDwKcb6-0?t=964 

postprocessing - расплывчивае объекты, теплые тона https://youtu.be/DCgDwKcb6-0?t=1011 - настройки к онсоной камере, картинку можем улучшать

использование package manager https://youtu.be/DCgDwKcb6-0?t=1066

пост обработка слоев https://youtu.be/DCgDwKcb6-0?t=1146
color grading - надстройка цветов https://youtu.be/DCgDwKcb6-0?t=1415

создание невидимой поверхности https://youtu.be/DCgDwKcb6-0?t=1618

скрыть элемент https://youtu.be/DCgDwKcb6-0?t=1637

сделать объект прозрачным https://youtu.be/DCgDwKcb6-0?t=1724

объединение объектов с помощью пустого, добавление физических свойств объекту https://youtu.be/DCgDwKcb6-0?t=1809

#question как создать новый материал копированием из сщуестввующего

создание тегов для объектов https://youtu.be/DCgDwKcb6-0?t=2086 и использование тегов в коде

объект с типом данных Transform https://youtu.be/DCgDwKcb6-0?t=2266
![[Pasted image 20201017204038.png]]
[[gameObject]]

#question что значит этот синтакс 
![[Pasted image 20201017211721.png]]

	
## Lesson 3. Основная механика игры 

не хотим чтобы был твердым телом 	https://www.youtube.com/watch?v=IvSn89poszM

отдельный игровой объект пустой , на который вешается скрипт https://youtu.be/IvSn89poszM?t=188

ошибка если все подствеч красным - перезапуск студии https://youtu.be/IvSn89poszM?t=262

![[Pasted image 20201017212458.png]]
vector3 - вектор в пространстве 3 координаты

куретины Coroutine
https://youtu.be/IvSn89poszM?t=642

#question что за yield
![[Pasted image 20201018072007.png]]

https://youtu.be/IvSn89poszM?t=2142
установка переменным c# скрипта значений объектов , созданных в Unity

https://youtu.be/IvSn89poszM?t=2196
обработка нажатия на клавишу мыши

если не в unity редакторе UNITY_EDITOR https://youtu.be/IvSn89poszM?t=2311
проверка только для начала прикосновения