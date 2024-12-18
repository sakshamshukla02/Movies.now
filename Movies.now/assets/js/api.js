'use strict';

const api_key='3474ec9ba79706de202c05e3cf15bfb3';
const imageBaseURL='https://image.tmdb.org/t/p/';


/**
 * Fetch data from a server using the 'url' and passes the result in JSON data to a 'callback' function,
 * along with an optional parameter if has 'optionalParam'
 */

const fetchDataFromServer=function(url, callback, optionalParam=null){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        callback(data, optionalParam);
    })
    
}
export {imageBaseURL, api_key, fetchDataFromServer};


