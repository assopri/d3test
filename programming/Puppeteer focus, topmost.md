#question 
использую puppeteer . При открытии новой странички (вкладки) в браузере (если браузер виден, то есть headless false), он перехватывает на себя фокус (управление) с других вкладок (а также других открытых на компьютере приложений). Как можно исключить перехват фокуса? Чтобы он как бы работал в бекграунде?

Puppeteer - avoid focus switching to browser / new tab when creating new page

When I create new page (in headful mode) it intercepts focus (from the current opened tab or from another applications depending where the focus is at the moment). Can I avoid that behavior (so the focus keep remaining where it was before creating the new page)?

http://disq.us/p/2d8bba0