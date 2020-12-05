Олег Белохохлов, [15.11.20 09:45]
там есть какие-то хитрость с синтаксисом import в nodejs

Олег Белохохлов, [15.11.20 09:45]
я могу через какое-то время поразбираться, но не сейчас

Олег Белохохлов, [15.11.20 09:45]
можешь заменить импорты на require

Alex, [15.11.20 09:45]
[ Voice message : Unknown File ]

Олег Белохохлов, [15.11.20 09:45]
а экспорты на module.exports

Олег Белохохлов, [15.11.20 09:46]
то есть вместо import test from 'test' пишешь: const test = require('test')

Олег Белохохлов, [15.11.20 09:46]
и вместо export const test пишешь module.exports.test = (Объект, который хочешь экспортнуть)


const common = require('./helpers/common')
const puppeteer = require('./helpers/puppeteer')

const SITE = "https://kolchaka.net";
const page = 8;

(async function main(){
    try {
        for(const page of common.arrayFromLength(8))
        {
            const url = `${SITE}`; 
            const pageContent = await puppeteer.getPageContent(url);