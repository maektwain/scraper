import { version } from '../../package.json';
import { Router } from 'express';
import "babel-polyfill";
var scrape = require('html-metadata');
var cheerio = require('cheerio');
var preq = require('preq'); // Promisified request libra
var meta = require('metascraper').load([
    require('metascraper-amazon-cashpay')(),
    require('metascraper-author')(),
    require('metascraper-date')(),
    require('metascraper-description')(),
    require('metascraper-image')(),
    require('metascraper-title')(),
    require('metascraper-url')()

]);
const got = require('got');



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
        async function  convinceME(turl) {

            /**
             * Check the url fof 404 and other messages
             */


            (async () => {
                const {body: html, url} = await got(turl);
                const metadata = await meta({html, url});
                console.log(metadata);
                res.json(metadata);

            })().catch(error => {
                if (error){
                    res.sendStatus(404);
                }
            })


        }


        async function delay() {
            console.log('started');
                convinceME(req.query.url);

            await timeout(5000);
            console.log('finished');


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
