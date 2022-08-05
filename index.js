const request = require('request');

// index.js
const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');

fetchCoordsByIP('96.55.150.53', (error, coordinates) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log("It worked! Returned coordinates: ", coordinates);

});

// fetchMyIP((error, ipNum) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ipNum);
// });

