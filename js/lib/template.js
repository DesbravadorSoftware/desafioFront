const template = {
  repoTemplate: (repo) => `
    <li class="repoLine">
      <a href="#/repo/${repo.full_name}" class="repo">
        <p class="bold">${repo.name}</p>
          <p>Stars: ${repo.stargazers_count}</p>
          <p>Language: ${repo.language}</p>
        </a>
    </li>
  `
}