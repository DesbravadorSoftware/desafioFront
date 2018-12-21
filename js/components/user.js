(function() {
  app.addComponent({
    name: "user",
    model: {
      loading: true,
      title: 'User',
      user: {},
      repos: []
    },
    view,
    controller
  });

  function view() {
    const { loading, user, repos } = this;

    if (loading) return "Loading...";

    const reposItems = repos.reduce(
      (html, repo) => html + template.repoTemplate(repo),
      ""
    );

    const reposTemplate = `
      <ul>
        ${reposItems}
      </ul>
    `;

    return `
      <div class="centerSection">
          <h2 class="sectionTitle">${user.name}</h2>
        <div class="user">
        <div>
          <div class="userSection">
            <h3 class="title">User details</h3>
            <div class="userDetails">
            <img src="${user.avatar_url}" alt="${user.name}" class="avatar" />
            <div class="details">
              <p class="bold">@${user.login}</p>
              <p><span class="bold">Followers:</span> ${user.followers}</p>
              <p><span class="bold">Following:</span> ${user.following}</p>
              <p><span class="bold">Email:</span> ${user.email || 'No email'}</p>
              <p><span class="bold">Bio:</span> ${user.bio || 'No Bio'}</p>
            </div>
            </div>
          </div>
          </div>
          <div class="list userSection">
            <h3 class="title">Repositories</h3>
            ${reposTemplate}
          </div>
        </div>
      </div>
      
    `;
  }

  function controller() {
    const name = router.params[0];
    this.loading = true;

    api
      .getUser(name)
      .then(user => {
        this.user = user;
      })
      .then(() => api.getUserRepos(name))
      .then(repos => {
        this.repos = repos;
        this.loading = false;
      });
  }
})();
