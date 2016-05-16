export default function (url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.onload = function () {
      if (this.status >= 200 && this.status < 400) {
        var data = JSON.parse(this.response);
        resolve(data);
      } else {
        reject(new Error(this.status));
      }
    };

    request.open('GET', url, true);
    request.send();
  });
}
