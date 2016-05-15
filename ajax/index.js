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

// request.open('GET', '/users.json', true);
// request.send();

// // getJSON('/users.json', function(data) {
// //   console.log(data);
// // });
