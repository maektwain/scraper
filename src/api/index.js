import { version } from '../../package.json';
import { Router } from 'express';
import "babel-polyfill";
const Scraper = require("cashpay-scraper");
import util from '../lib/util';



export default ({ config }) => {
	let api = Router();

	// mount the facets resource

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	api.get('/scrape', async (req, res) => {
	if (!req.query) {
		res.json({'message': 'No url provided'});
	}




        const timeout = ms => new Promise(res => setTimeout(res, ms));

        // Send to scraping

        async function  convinceME(url) {
            try {
                let scrape = await Scraper.scrapeAndDetect(url).then(value => {
                    res.json({value});
                }).catch((err =>{
                    if (err){
                        res.json(err.message);
                    }
                }));
            }catch (error){
                console.log(error);
            }


        }

        async function delay() {
            console.log('started');
                convinceME(req.query.url);

            await timeout(5000);
            console.log('finished')

        }
        delay()










	});

    // const scraper = async (url) => {
    //     (async () => {
    //         const data = await Scraper(url);
    //         return data;
    //     })();
    //
    // };


	return api;


}
