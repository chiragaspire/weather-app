const request = require('request');
const geocode = (address, callback) => {
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiY2hpcmFnLWthbWFuaSIsImEiOiJja3J5aTlwY2owajJkMzFtcnNkbG9zdXJ1In0.6ujVFsoc0ICVX-1-BPRt9Q&limit=1'
    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback(
                "unable to connect location service!!", undefined
            );
        }
        else if (body.features.length===0) {
            callback(
                "location not found. try to search another location!!",
                undefined
            )
        } else {
            const lattitude = body.features[0].center[0];
            const longitude = body.features[0].center[1];
            const location= body.features[0].place_name
            
            const data = {
                lattitude,longitude,location
            }
            callback( undefined, data);
        }
       
    })
}

module.exports = geocode;