export default function (url, cb) {
  const request = new XMLHttpRequest();

  request.onload = function () {
    if (this.status >= 200 && this.status < 400) {
      // Success!
      var data = JSON.parse(this.response);
      cb(data);
    } else {
      // We reached our target server, but it returned an error
      throw new Error(this.response);
    }
  };

  request.open('GET', url, true);
  request.send();
}
