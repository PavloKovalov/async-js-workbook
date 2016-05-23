import getJSON from '../ajax/get_json.js';
import view from './view.js';
import { GH_CLIENT_ID, GH_CLIENT_SECRET } from './gh_config.js';

// say my name!
const githubName = 'octocat';

const oauthParams = `?client_id=${GH_CLIENT_ID}&client_secret=${GH_CLIENT_SECRET}`;
const apiUrl = `https://api.github.com/users/${githubName}`;

function requestGitHub(url, callback) {
  getJSON(`${url}${oauthParams}`, function(data) {
    callback(data);
    render();
  });
}

let user = {
  name: githubName
};

const container = document.getElementById('app');

function render() {
  container.innerHTML = view(user);
}

requestGitHub(apiUrl, function (data) {
    user = data;

    // if (user.repos_url) {
    //   requestGitHub(user.repos_url, function (data) {
    //     user.repos = {};
    //
    //     for (let repo of data) {
    //       requestGitHub(repo.languages_url, function (data) {
    //         user.repos[repo.name].languages = Object.keys(data);
    //       });
    //
    //       user.repos[repo.name] = {
    //         name: repo.name,
    //         description: repo.description,
    //         url: repo.html_url
    //       };
    //     }
    //   });
    // }
});
