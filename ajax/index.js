// // import getJSON from './get_json.js';

const request = new XMLHttpRequest();

request.onload = function () {
  if (this.status >= 200 && this.status < 400) {
    // Success!
    var data = JSON.parse(this.response);
    console.log(data);
  } else {
    // We reached our target server, but it returned an error
    throw new Error(this.response);
  }
};

/**
 *  Endpoints:
 *  /users.json - valid JSON with some data
 *  /error.json - just a string case error in JSON.parse
 */
 
// request.open('GET', '/users.json', true);
// request.send();

// // getJSON('/users.json', function(data) {
// //   console.log(data);
// // });
