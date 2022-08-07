const request = require('request');

// index.js
const { fetchMyIP, fetchCoordsByIP} = require('./iss02');

const temcallbackfunc = (error, coordinates) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log("It worked! Returned coordinates: ", coordinates);

};

fetchCoordsByIP('96.55.150.53', temcallbackfunc);

// fetchMyIP((error, ipNum) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ipNum);
// });

