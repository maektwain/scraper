
/**	Creates a callback that proxies node callback style arguments to an Express Response object.
 *	@param {express.Response} res	Express HTTP Response
 *	@param {number} [status=200]	Status code to send on success
 *
 *	@example
 *		list(req, res) {
 *			collection.find({}, toRes(res));
 *		}
 */
import { scrapeAndDetect } from "cashpay-scraper";

module.exports = {
     scrape :async (url) => {
         return new Promise((resolve, reject) => {
             scrapeAndDetect(url,(err, data) => {
                 console.log('Started');
                 if(!err){
                     try {
                         let message = {data};

                         resolve(message)
                     } catch (errorFromTry) {
                    reject(errorFromTry)
                 }
                     }else{ reject(err)}
             })
         });


    }
};



