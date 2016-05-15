import React from 'react';

export default function (user) {
  let html = `<h1>Hello, I am ${user.name}!</h1>`;

  if (user.avatar_url) {
    html += `<img class="img-circle" width="200px" src="${user.avatar_url}" />`;
  }

  if (user.company) {
    html += `<p>I currently work at <strong>${user.company}</strong></p>`;
  }

  const profile_link = `<a class="btn btn-link" href="${user.html_url}">GitHub profile</a>`;

  if (user.public_repos) {
    html += `<p>You can find ${user.public_repos} public repos on my ${profile_link}</p>`;
  } else {
    html += `<p>There nothing to see on my ${profile_link}`;
  }

  if (user.repos) {
    html += '<ul>';
    for (let repo in user.repos) {
      repo = user.repos[repo];
      const link = `<a class="btn btn-link" href="${repo.url}">${repo.name}</a>`;
      let langs;
      if (repo.languages) {
        langs = `${repo.languages.join(', ')}`;
      }
      html += `<li>${link} – ${repo.description} ${langs ? '<br>Written in: <b><i>'+langs+'</i></b>' : '' }</li>`;
    }
    html += '</ul>';
  }

  return html
};
