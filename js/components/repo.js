(function() {
  app.addComponent({
    name: "repo",
    model: {
      loading: true,
      title: "Repo",
      repo: {}
    },
    view,
    controller
  });

  function view() {
    const repo = this.repo;

    if (this.loading) return "Loading...";

    return `
      <div class="repoSection">
        <h3 class="sectionTitle">${repo.name}</h3>
        <div class="details">
          <p><span class="bold">Description:</span>: ${repo.description || 'No description'}</p>
          <p><span class="bold">Stars:</span>: ${repo.stargazers_count}</p>
          <p><span class="bold">Language:</span>: ${repo.language || 'No language'}</p>
          <a href="${repo.html_url}">View On GitHub -></a>
        </div>
      </div>
      `;
  }

  function controller() {
    const name = router.params[0];
    this.loading = true;

    api.getRepo(name).then(repo => {
      this.repo = repo;
      this.loading = false;
    });
  }
})();
