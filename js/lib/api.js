class API {
  constructor() {
    this.API_URL = "https://api.github.com";
  }

  getUser(username) {
    return fetchJSON(`${this.API_URL}/users/${username}`).then(data => data);
  }

  getUserRepos(username) {
    return fetchJSON(`${this.API_URL}/users/${username}/repos`).then(
      data => data
    );
  }

  getRepo(fullName) {
    return fetchJSON(`${this.API_URL}/repos/${fullName}`).then(data => data);
  }
}
