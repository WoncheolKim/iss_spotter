const request = require('request');

/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
 const fetchMyIP = function(callback) { 
  request('https://api.ipify.org/?format=json', function (error, response, body) {
    if (error) {
      console.error('error:', error); // Print the error if one occurred
      callback(error, null)
      return;
    }  
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    } 
    console.log(typeof body, typeof JSON.parse(body),JSON.parse(body).ip);
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
    const ipNum = JSON.parse(body).ip;
    callback(null, ipNum);
   
  });
  // use request to fetch IP address from JSON API
}


// iss.js
/**
 * Makes a single API request to retrieve the lat/lng for a given IPv4 address.
 * Input:
 *   - The ip (ipv4) address (string)
 *   - A callback (to pass back an error or the lat/lng object)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The lat and lng as an object (null if error). Example:
 *     { latitude: '49.27670', longitude: '-123.13000' }
 */
 const fetchCoordsByIP = function(ip, callback) {
  request(`http://ipwho.is/${ip}`, (error, response, body) => {

    if (error) {
      callback(error, null);
      return;
    }

    const parsedBody = JSON.parse(body);

    if (!parsedBody.success) {
      const message = `Success status was ${parsedBody.success}. Server message says: ${parsedBody.message} when fetching for IP ${parsedBody.ip}`;
      callback(Error(message), null);
      return;
    } 

    const { latitude, longitude } = parsedBody;

    callback(null, {latitude, longitude});
  });
};


// Don't need to export the other function since we are not testing it right now.
module.exports = { fetchMyIP, fetchCoordsByIP }
