import fetch from './fetch.js';
import view from '../callbacks/view.js';
import { GH_CLIENT_ID, GH_CLIENT_SECRET } from '../callbacks/gh_config.js';

// say my name!
const githubName = 'octocat';

const oauthParams = `?client_id=${GH_CLIENT_ID}&client_secret=${GH_CLIENT_SECRET}`;
const apiUrl = `https://api.github.com/users/${githubName}${oauthParams}`;

let user = {
  name: githubName
};

const container = document.getElementById('app');

function render() {
  container.innerHTML = view(user);
}

fetch(apiUrl).then(function (data) {
    user = data;
    // return fetch(`${user.repos_url}${oauthParams}`);
}).then(function(data) {
  // user.repos = {};
  // const repoUrls = [];
  // for (let repo of data) {
  //
  //   repoUrls.push({
  //     name: repo.name,
  //     url: `${repo.languages_url}${oauthParams}`
  //   });
  //
  //   user.repos[repo.name] = {
  //     name: repo.name,
  //     description: repo.description,
  //     url: repo.html_url
  //   };
  // }
  //
  // Promise.all(
  //   repoUrls.map(function(repo) {
  //     return fetch(repo.url).then(function (langs) {
  //       user.repos[repo.name].languages = Object.keys(langs);
  //     });
  //   })
  // ).then(render)
}).then(render);
