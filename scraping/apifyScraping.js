const Apify = require('apify')

const axios = require('axios');

const getInformationUnderCard = () => {
    Apify.main(async () => {
        const requestQueue = await Apify.openRequestQueue();
        await requestQueue.addRequest({ url: 'https://www.bing.com/covid?form=C19ANS' });
        const crawler = new Apify.PuppeteerCrawler({
            requestQueue,
            handlePageFunction: async ({ request, page }) => {
                console.log(`Processing ${request.url}...`);
                const data = await page.$$eval('div.areas  > div.areaDiv', $posts => {
                    const scrapedData = [];
                    $posts.forEach($post => {
                        scrapedData.push({
                            title: $post.querySelector('div.areaName').textContent,
                            numberCas: $post.querySelector('div.secondaryInfo').textContent,
                        });
                    });

                    return scrapedData;
                });
                // axios send data // 
                data.map( res => {
                    axios.post('http://localhost:4000/informationCardUnder/add', {
                        title: res.title,
                        numberCas: res.numberCas
                    })
                    .then( response => console.log(response))
                    .catch( error => console.log(error))
                })
                await Apify.pushData(data);            
            },
            handleFailedRequestFunction: async ({ request }) => {
                console.log(`Request ${request.url} failed too many times`);
                await Apify.pushData({
                    '#debug': Apify.utils.createRequestDebugInfo(request),
                });
            },
        });
        await crawler.run();
        console.log('Crawler finished.');
    })
}

const getInformationCard = () => {
    axios.get('http://localhost:4000/informationCardUnder/', {} )
        .then( (response) => {
            Apify.main(async () => {
                const browser = await Apify.launchPuppeteer();
                
                console.log('Open target page');
                const page = await browser.newPage();
                await page.goto('https://www.gps-longitude-latitude.net/');

                await page.type('div.inputfield input#searchterm', 'Madrid');
                await Promise.all([page.waitForNavigation(), page.click('div.btn')]);

                // Obtain and print list of search results
                const results = await page.$$eval('input#gps', nodes =>
                    nodes.map(node => ({
                        name: node,
                    })),
                );
                console.log('Results:', results);
            
                //await Apify.pushData(results);
            
                await browser.close();

            })
            /*response.data.map( res => {
                console.log(res.title)
            })*/
        })
        .catch( (error) => console.log(error))

}

const getAllData = () => {
    Apify.main(async () => {
        const requestQueue = await Apify.openRequestQueue();
        await requestQueue.addRequest({ url: 'https://www.bing.com/covid/local/france?form=C19ANS&vert=graph' });
        const crawler = new Apify.PuppeteerCrawler({
            requestQueue,
            handlePageFunction: async ({ request, page }) => {
                console.log(`Processing ${request.url}...`);
                const data = await page.$$eval('div.content', $posts => {
                    const scrapedData = [];
                    $posts.map( post => scrapedData.push(post))
                    return scrapedData;
                });
                console.log(data)
                
            }
        });
        await crawler.run();
        console.log('Crawler finished.');
    });
}

getAllData()
