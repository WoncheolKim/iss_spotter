// index2.js

const { nextISSTimesForMyLocation } = require('./iss_promised');
// see index.js for printPassTimes 
// copy it from there, or better yet, moduralize and require it in both files

nextISSTimesForMyLocation()
  .then(timesArray => {
    for (const time of timesArray) {
      const datetime = new Date(0);
      datetime.setUTCSeconds(time.risetime);
      const duration = time.duration;
      console.log(`Next pass at ${datetime} for ${duration} seconds!`);
    }
  });
  