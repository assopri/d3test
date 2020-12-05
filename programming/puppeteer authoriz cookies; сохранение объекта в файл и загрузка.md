
export async function authoriseBrowser(login: string,password: string): Promise<Array<puppeteer.Cookie>>{
    if (!browser) browser = await puppeteer.launch({
        headless: true,
        args: ['--lang=en-GB']
    })
    const page =  await browser.newPage()
    await page.goto('https://facebook.com')
    await page.type('#email',login)
    await page.type('#pass',password)
    await page.click('#loginbutton')
    await page.waitForNavigation()
    return await page.cookies()
}

if(!browser) {
            browser = await puppeteer.launch({
                headless: true,
                args: ['--lang=en-GB']
            })
        }
        const page = await browser.newPage()
        page.setViewport({
            width: 1024,
            height: 2048,
        })
        for (const cookie of cookies) await page.setCookie(cookie)
        await page.goto(
		
		await page.goto(this.url);

        let cookies = await page.cookies();
        console.log(`cookies:`);
        for (const cookie of cookies)console.log(cookie);
        

        var jsonData = JSON.stringify(cookies);
        fs.writeFile("cookies.json", jsonData, function(err) {
            if (err) {
                console.log(err);
            }
        });

        let rawdata = fs.readFileSync('cookies.json');
        let cookieRead = JSON.parse(rawdata);
        console.log(`cookies read:`);
        console.log(cookieRead);
