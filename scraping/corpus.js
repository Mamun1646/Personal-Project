const puppeteer= require ('puppeteer');
const fs = require('fs');
async function run(){
    const browser=await puppeteer.launch();
    const page =await browser.newPage();
    await page.goto('https://corpus.quran.com/wordbyword.jsp?chapter=1&verse=1')
   // await page.screenshot({path:"corpus.quran.png",fullPage:true})
   try{const links=await page.evaluate(()=>
    Array.from(document.querySelectorAll('a'),(e)=>e.href))
    console.log(links)
    
    }catch(err) {console.log(err)}
        await browser.close()
    

}
run()
