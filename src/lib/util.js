
/**	Creates a callback that proxies node callback style arguments to an Express Response object.
 *	@param {express.Response} res	Express HTTP Response
 *	@param {number} [status=200]	Status code to send on success
 *
 *	@example
 *		list(req, res) {
 *			collection.find({}, toRes(res));
 *		}
 */
import {Scraper} from "@jonstuebe/scraper";

module.exports = {
     scrape :async (url) => {
        const data = await Scraper(url);
        return data;
    }
};



