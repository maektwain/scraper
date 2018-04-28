import { version } from '../../package.json';
import { Router } from 'express';

const Scraper = require("@jonstuebe/scraper");



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

        const timeout = ms => new Promise(res => setTimeout(res, ms))

		// Send to scraping

		async function  convinceME(url) {
                let scrape = await Scraper.scrapeAndDetect(url);
                res.json({scrape});
                }

        async function delay() {
			console.log('started');
			convinceME(req.query.url);
			await timeout(5000);
			console.log('finished')
			
        }
        delay()


	});

    const scraper = async (url) => {
        (async () => {
            const data = await Scraper(url);
            return data;
        })();

    };


	return api;



}
