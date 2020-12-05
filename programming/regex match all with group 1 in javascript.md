Alex, [30.11.20 16:08]
https://javascript.info/regexp-groups тут нашел ответ, как выудить все матчи регулярки при проходе по ним вытянуть конкретную группу каждой регулярки

Alex, [30.11.20 16:11]
let str = "[[link1]] [[link2]]"

let results = str.matchAll(/\[\[(.*?)\]\]/gi);


results = Array.from(results); // let's turn it into array

console.log(results); 
console.log(results[1]);
