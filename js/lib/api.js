class API {
  constructor() {
    this.API_URL = "https://api.github.com";
  }
  getUser(username) {
    return fetchJSON(`${this.API_URL}/users/${username}`, user).then(
      data => data
    );
  }
  getUserRepos(username) {
    return fetchJSON(`${this.API_URL}/users/${username}/repos`, repos).then(
      data => {
        return data.sort(function(a, b) {
          return b.stargazers_count - a.stargazers_count;
        });
      }
    );
  }
  getRepo(fullName) {
    return fetchJSON(`${this.API_URL}/repos/${fullName}`, repo).then(
      data => data
    );
  }
}

const user = {
  login: "MateusStanki",
  id: 32174637,
  node_id: "MDQ6VXNlcjMyMTc0NjM3",
  avatar_url: "https://avatars0.githubusercontent.com/u/32174637?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/MateusStanki",
  html_url: "https://github.com/MateusStanki",
  followers_url: "https://api.github.com/users/MateusStanki/followers",
  following_url:
    "https://api.github.com/users/MateusStanki/following{/other_user}",
  gists_url: "https://api.github.com/users/MateusStanki/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/MateusStanki/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/MateusStanki/subscriptions",
  organizations_url: "https://api.github.com/users/MateusStanki/orgs",
  repos_url: "https://api.github.com/users/MateusStanki/repos",
  events_url: "https://api.github.com/users/MateusStanki/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/MateusStanki/received_events",
  type: "User",
  site_admin: false,
  name: "Mateus Stanki",
  company: "@mobLee ",
  blog: "",
  location: null,
  email: "devstanki@gmail.com",
  hireable: true,
  bio: "javascript 😍 hehe",
  public_repos: 8,
  public_gists: 0,
  followers: 3,
  following: 12,
  created_at: "2017-09-21T17:20:43Z",
  updated_at: "2018-11-28T01:24:53Z"
};

const repos = [
  {
    id: 119555550,
    node_id: "MDEwOlJlcG9zaXRvcnkxMTk1NTU1NTA=",
    name: "better-playlists",
    full_name: "MateusStanki/better-playlists",
    private: false,
    owner: {
      login: "MateusStanki",
      id: 32174637,
      node_id: "MDQ6VXNlcjMyMTc0NjM3",
      avatar_url: "https://avatars0.githubusercontent.com/u/32174637?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/MateusStanki",
      html_url: "https://github.com/MateusStanki",
      followers_url: "https://api.github.com/users/MateusStanki/followers",
      following_url:
        "https://api.github.com/users/MateusStanki/following{/other_user}",
      gists_url: "https://api.github.com/users/MateusStanki/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/MateusStanki/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/MateusStanki/subscriptions",
      organizations_url: "https://api.github.com/users/MateusStanki/orgs",
      repos_url: "https://api.github.com/users/MateusStanki/repos",
      events_url: "https://api.github.com/users/MateusStanki/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/MateusStanki/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/MateusStanki/better-playlists",
    description: "React playlists prototype with Spotify API",
    fork: false,
    url: "https://api.github.com/repos/MateusStanki/better-playlists",
    forks_url:
      "https://api.github.com/repos/MateusStanki/better-playlists/forks",
    keys_url:
      "https://api.github.com/repos/MateusStanki/better-playlists/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/MateusStanki/better-playlists/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/MateusStanki/better-playlists/teams",
    hooks_url:
      "https://api.github.com/repos/MateusStanki/better-playlists/hooks",
    issue_events_url:
      "https://api.github.com/repos/MateusStanki/better-playlists/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/MateusStanki/better-playlists/events",
    assignees_url:
      "https://api.github.com/repos/MateusStanki/better-playlists/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/MateusStanki/better-playlists/branches{/branch}",
    tags_url: "https://api.github.com/repos/MateusStanki/better-playlists/tags",
    blobs_url:
      "https://api.github.com/repos/MateusStanki/better-playlists/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/MateusStanki/better-playlists/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/MateusStanki/better-playlists/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/MateusStanki/better-playlists/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/MateusStanki/better-playlists/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/MateusStanki/better-playlists/languages",
    stargazers_url:
      "https://api.github.com/repos/MateusStanki/better-playlists/stargazers",
    contributors_url:
      "https://api.github.com/repos/MateusStanki/better-playlists/contributors",
    subscribers_url:
      "https://api.github.com/repos/MateusStanki/better-playlists/subscribers",
    subscription_url:
      "https://api.github.com/repos/MateusStanki/better-playlists/subscription",
    commits_url:
      "https://api.github.com/repos/MateusStanki/better-playlists/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/MateusStanki/better-playlists/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/MateusStanki/better-playlists/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/MateusStanki/better-playlists/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/MateusStanki/better-playlists/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/MateusStanki/better-playlists/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/MateusStanki/better-playlists/merges",
    archive_url:
      "https://api.github.com/repos/MateusStanki/better-playlists/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/MateusStanki/better-playlists/downloads",
    issues_url:
      "https://api.github.com/repos/MateusStanki/better-playlists/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/MateusStanki/better-playlists/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/MateusStanki/better-playlists/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/MateusStanki/better-playlists/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/MateusStanki/better-playlists/labels{/name}",
    releases_url:
      "https://api.github.com/repos/MateusStanki/better-playlists/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/MateusStanki/better-playlists/deployments",
    created_at: "2018-01-30T15:32:22Z",
    updated_at: "2018-11-24T19:10:59Z",
    pushed_at: "2018-02-03T00:15:40Z",
    git_url: "git://github.com/MateusStanki/better-playlists.git",
    ssh_url: "git@github.com:MateusStanki/better-playlists.git",
    clone_url: "https://github.com/MateusStanki/better-playlists.git",
    svn_url: "https://github.com/MateusStanki/better-playlists",
    homepage: "",
    size: 144,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 146220467,
    node_id: "MDEwOlJlcG9zaXRvcnkxNDYyMjA0Njc=",
    name: "cliente-crud",
    full_name: "MateusStanki/cliente-crud",
    private: false,
    owner: {
      login: "MateusStanki",
      id: 32174637,
      node_id: "MDQ6VXNlcjMyMTc0NjM3",
      avatar_url: "https://avatars0.githubusercontent.com/u/32174637?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/MateusStanki",
      html_url: "https://github.com/MateusStanki",
      followers_url: "https://api.github.com/users/MateusStanki/followers",
      following_url:
        "https://api.github.com/users/MateusStanki/following{/other_user}",
      gists_url: "https://api.github.com/users/MateusStanki/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/MateusStanki/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/MateusStanki/subscriptions",
      organizations_url: "https://api.github.com/users/MateusStanki/orgs",
      repos_url: "https://api.github.com/users/MateusStanki/repos",
      events_url: "https://api.github.com/users/MateusStanki/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/MateusStanki/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/MateusStanki/cliente-crud",
    description: "Projeto crud de cliente desenvolvido em java web",
    fork: false,
    url: "https://api.github.com/repos/MateusStanki/cliente-crud",
    forks_url: "https://api.github.com/repos/MateusStanki/cliente-crud/forks",
    keys_url:
      "https://api.github.com/repos/MateusStanki/cliente-crud/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/MateusStanki/cliente-crud/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/MateusStanki/cliente-crud/teams",
    hooks_url: "https://api.github.com/repos/MateusStanki/cliente-crud/hooks",
    issue_events_url:
      "https://api.github.com/repos/MateusStanki/cliente-crud/issues/events{/number}",
    events_url: "https://api.github.com/repos/MateusStanki/cliente-crud/events",
    assignees_url:
      "https://api.github.com/repos/MateusStanki/cliente-crud/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/MateusStanki/cliente-crud/branches{/branch}",
    tags_url: "https://api.github.com/repos/MateusStanki/cliente-crud/tags",
    blobs_url:
      "https://api.github.com/repos/MateusStanki/cliente-crud/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/MateusStanki/cliente-crud/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/MateusStanki/cliente-crud/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/MateusStanki/cliente-crud/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/MateusStanki/cliente-crud/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/MateusStanki/cliente-crud/languages",
    stargazers_url:
      "https://api.github.com/repos/MateusStanki/cliente-crud/stargazers",
    contributors_url:
      "https://api.github.com/repos/MateusStanki/cliente-crud/contributors",
    subscribers_url:
      "https://api.github.com/repos/MateusStanki/cliente-crud/subscribers",
    subscription_url:
      "https://api.github.com/repos/MateusStanki/cliente-crud/subscription",
    commits_url:
      "https://api.github.com/repos/MateusStanki/cliente-crud/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/MateusStanki/cliente-crud/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/MateusStanki/cliente-crud/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/MateusStanki/cliente-crud/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/MateusStanki/cliente-crud/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/MateusStanki/cliente-crud/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/MateusStanki/cliente-crud/merges",
    archive_url:
      "https://api.github.com/repos/MateusStanki/cliente-crud/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/MateusStanki/cliente-crud/downloads",
    issues_url:
      "https://api.github.com/repos/MateusStanki/cliente-crud/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/MateusStanki/cliente-crud/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/MateusStanki/cliente-crud/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/MateusStanki/cliente-crud/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/MateusStanki/cliente-crud/labels{/name}",
    releases_url:
      "https://api.github.com/repos/MateusStanki/cliente-crud/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/MateusStanki/cliente-crud/deployments",
    created_at: "2018-08-26T22:17:02Z",
    updated_at: "2018-08-27T13:57:58Z",
    pushed_at: "2018-08-27T13:57:57Z",
    git_url: "git://github.com/MateusStanki/cliente-crud.git",
    ssh_url: "git@github.com:MateusStanki/cliente-crud.git",
    clone_url: "https://github.com/MateusStanki/cliente-crud.git",
    svn_url: "https://github.com/MateusStanki/cliente-crud",
    homepage: "",
    size: 14713,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Java",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 160282522,
    node_id: "MDEwOlJlcG9zaXRvcnkxNjAyODI1MjI=",
    name: "code-paradise",
    full_name: "MateusStanki/code-paradise",
    private: false,
    owner: {
      login: "MateusStanki",
      id: 32174637,
      node_id: "MDQ6VXNlcjMyMTc0NjM3",
      avatar_url: "https://avatars0.githubusercontent.com/u/32174637?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/MateusStanki",
      html_url: "https://github.com/MateusStanki",
      followers_url: "https://api.github.com/users/MateusStanki/followers",
      following_url:
        "https://api.github.com/users/MateusStanki/following{/other_user}",
      gists_url: "https://api.github.com/users/MateusStanki/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/MateusStanki/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/MateusStanki/subscriptions",
      organizations_url: "https://api.github.com/users/MateusStanki/orgs",
      repos_url: "https://api.github.com/users/MateusStanki/repos",
      events_url: "https://api.github.com/users/MateusStanki/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/MateusStanki/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/MateusStanki/code-paradise",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/MateusStanki/code-paradise",
    forks_url: "https://api.github.com/repos/MateusStanki/code-paradise/forks",
    keys_url:
      "https://api.github.com/repos/MateusStanki/code-paradise/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/MateusStanki/code-paradise/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/MateusStanki/code-paradise/teams",
    hooks_url: "https://api.github.com/repos/MateusStanki/code-paradise/hooks",
    issue_events_url:
      "https://api.github.com/repos/MateusStanki/code-paradise/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/MateusStanki/code-paradise/events",
    assignees_url:
      "https://api.github.com/repos/MateusStanki/code-paradise/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/MateusStanki/code-paradise/branches{/branch}",
    tags_url: "https://api.github.com/repos/MateusStanki/code-paradise/tags",
    blobs_url:
      "https://api.github.com/repos/MateusStanki/code-paradise/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/MateusStanki/code-paradise/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/MateusStanki/code-paradise/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/MateusStanki/code-paradise/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/MateusStanki/code-paradise/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/MateusStanki/code-paradise/languages",
    stargazers_url:
      "https://api.github.com/repos/MateusStanki/code-paradise/stargazers",
    contributors_url:
      "https://api.github.com/repos/MateusStanki/code-paradise/contributors",
    subscribers_url:
      "https://api.github.com/repos/MateusStanki/code-paradise/subscribers",
    subscription_url:
      "https://api.github.com/repos/MateusStanki/code-paradise/subscription",
    commits_url:
      "https://api.github.com/repos/MateusStanki/code-paradise/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/MateusStanki/code-paradise/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/MateusStanki/code-paradise/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/MateusStanki/code-paradise/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/MateusStanki/code-paradise/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/MateusStanki/code-paradise/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/MateusStanki/code-paradise/merges",
    archive_url:
      "https://api.github.com/repos/MateusStanki/code-paradise/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/MateusStanki/code-paradise/downloads",
    issues_url:
      "https://api.github.com/repos/MateusStanki/code-paradise/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/MateusStanki/code-paradise/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/MateusStanki/code-paradise/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/MateusStanki/code-paradise/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/MateusStanki/code-paradise/labels{/name}",
    releases_url:
      "https://api.github.com/repos/MateusStanki/code-paradise/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/MateusStanki/code-paradise/deployments",
    created_at: "2018-12-04T02:12:42Z",
    updated_at: "2018-12-04T02:12:42Z",
    pushed_at: "2018-12-04T02:12:42Z",
    git_url: "git://github.com/MateusStanki/code-paradise.git",
    ssh_url: "git@github.com:MateusStanki/code-paradise.git",
    clone_url: "https://github.com/MateusStanki/code-paradise.git",
    svn_url: "https://github.com/MateusStanki/code-paradise",
    homepage: null,
    size: 0,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 137895488,
    node_id: "MDEwOlJlcG9zaXRvcnkxMzc4OTU0ODg=",
    name: "criptografia",
    full_name: "MateusStanki/criptografia",
    private: false,
    owner: {
      login: "MateusStanki",
      id: 32174637,
      node_id: "MDQ6VXNlcjMyMTc0NjM3",
      avatar_url: "https://avatars0.githubusercontent.com/u/32174637?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/MateusStanki",
      html_url: "https://github.com/MateusStanki",
      followers_url: "https://api.github.com/users/MateusStanki/followers",
      following_url:
        "https://api.github.com/users/MateusStanki/following{/other_user}",
      gists_url: "https://api.github.com/users/MateusStanki/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/MateusStanki/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/MateusStanki/subscriptions",
      organizations_url: "https://api.github.com/users/MateusStanki/orgs",
      repos_url: "https://api.github.com/users/MateusStanki/repos",
      events_url: "https://api.github.com/users/MateusStanki/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/MateusStanki/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/MateusStanki/criptografia",
    description: "Criptografia de texto em AES, DES e Cifra de Cesar",
    fork: false,
    url: "https://api.github.com/repos/MateusStanki/criptografia",
    forks_url: "https://api.github.com/repos/MateusStanki/criptografia/forks",
    keys_url:
      "https://api.github.com/repos/MateusStanki/criptografia/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/MateusStanki/criptografia/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/MateusStanki/criptografia/teams",
    hooks_url: "https://api.github.com/repos/MateusStanki/criptografia/hooks",
    issue_events_url:
      "https://api.github.com/repos/MateusStanki/criptografia/issues/events{/number}",
    events_url: "https://api.github.com/repos/MateusStanki/criptografia/events",
    assignees_url:
      "https://api.github.com/repos/MateusStanki/criptografia/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/MateusStanki/criptografia/branches{/branch}",
    tags_url: "https://api.github.com/repos/MateusStanki/criptografia/tags",
    blobs_url:
      "https://api.github.com/repos/MateusStanki/criptografia/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/MateusStanki/criptografia/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/MateusStanki/criptografia/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/MateusStanki/criptografia/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/MateusStanki/criptografia/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/MateusStanki/criptografia/languages",
    stargazers_url:
      "https://api.github.com/repos/MateusStanki/criptografia/stargazers",
    contributors_url:
      "https://api.github.com/repos/MateusStanki/criptografia/contributors",
    subscribers_url:
      "https://api.github.com/repos/MateusStanki/criptografia/subscribers",
    subscription_url:
      "https://api.github.com/repos/MateusStanki/criptografia/subscription",
    commits_url:
      "https://api.github.com/repos/MateusStanki/criptografia/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/MateusStanki/criptografia/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/MateusStanki/criptografia/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/MateusStanki/criptografia/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/MateusStanki/criptografia/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/MateusStanki/criptografia/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/MateusStanki/criptografia/merges",
    archive_url:
      "https://api.github.com/repos/MateusStanki/criptografia/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/MateusStanki/criptografia/downloads",
    issues_url:
      "https://api.github.com/repos/MateusStanki/criptografia/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/MateusStanki/criptografia/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/MateusStanki/criptografia/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/MateusStanki/criptografia/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/MateusStanki/criptografia/labels{/name}",
    releases_url:
      "https://api.github.com/repos/MateusStanki/criptografia/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/MateusStanki/criptografia/deployments",
    created_at: "2018-06-19T13:29:34Z",
    updated_at: "2018-06-26T15:31:14Z",
    pushed_at: "2018-06-26T15:31:13Z",
    git_url: "git://github.com/MateusStanki/criptografia.git",
    ssh_url: "git@github.com:MateusStanki/criptografia.git",
    clone_url: "https://github.com/MateusStanki/criptografia.git",
    svn_url: "https://github.com/MateusStanki/criptografia",
    homepage: null,
    size: 36,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Java",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 158965881,
    node_id: "MDEwOlJlcG9zaXRvcnkxNTg5NjU4ODE=",
    name: "FastSales.back-end",
    full_name: "MateusStanki/FastSales.back-end",
    private: false,
    owner: {
      login: "MateusStanki",
      id: 32174637,
      node_id: "MDQ6VXNlcjMyMTc0NjM3",
      avatar_url: "https://avatars0.githubusercontent.com/u/32174637?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/MateusStanki",
      html_url: "https://github.com/MateusStanki",
      followers_url: "https://api.github.com/users/MateusStanki/followers",
      following_url:
        "https://api.github.com/users/MateusStanki/following{/other_user}",
      gists_url: "https://api.github.com/users/MateusStanki/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/MateusStanki/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/MateusStanki/subscriptions",
      organizations_url: "https://api.github.com/users/MateusStanki/orgs",
      repos_url: "https://api.github.com/users/MateusStanki/repos",
      events_url: "https://api.github.com/users/MateusStanki/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/MateusStanki/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/MateusStanki/FastSales.back-end",
    description: "(WIP) Retail system made with express/apollo/mongoose",
    fork: false,
    url: "https://api.github.com/repos/MateusStanki/FastSales.back-end",
    forks_url:
      "https://api.github.com/repos/MateusStanki/FastSales.back-end/forks",
    keys_url:
      "https://api.github.com/repos/MateusStanki/FastSales.back-end/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/MateusStanki/FastSales.back-end/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/MateusStanki/FastSales.back-end/teams",
    hooks_url:
      "https://api.github.com/repos/MateusStanki/FastSales.back-end/hooks",
    issue_events_url:
      "https://api.github.com/repos/MateusStanki/FastSales.back-end/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/MateusStanki/FastSales.back-end/events",
    assignees_url:
      "https://api.github.com/repos/MateusStanki/FastSales.back-end/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/MateusStanki/FastSales.back-end/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/MateusStanki/FastSales.back-end/tags",
    blobs_url:
      "https://api.github.com/repos/MateusStanki/FastSales.back-end/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/MateusStanki/FastSales.back-end/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/MateusStanki/FastSales.back-end/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/MateusStanki/FastSales.back-end/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/MateusStanki/FastSales.back-end/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/MateusStanki/FastSales.back-end/languages",
    stargazers_url:
      "https://api.github.com/repos/MateusStanki/FastSales.back-end/stargazers",
    contributors_url:
      "https://api.github.com/repos/MateusStanki/FastSales.back-end/contributors",
    subscribers_url:
      "https://api.github.com/repos/MateusStanki/FastSales.back-end/subscribers",
    subscription_url:
      "https://api.github.com/repos/MateusStanki/FastSales.back-end/subscription",
    commits_url:
      "https://api.github.com/repos/MateusStanki/FastSales.back-end/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/MateusStanki/FastSales.back-end/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/MateusStanki/FastSales.back-end/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/MateusStanki/FastSales.back-end/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/MateusStanki/FastSales.back-end/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/MateusStanki/FastSales.back-end/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/MateusStanki/FastSales.back-end/merges",
    archive_url:
      "https://api.github.com/repos/MateusStanki/FastSales.back-end/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/MateusStanki/FastSales.back-end/downloads",
    issues_url:
      "https://api.github.com/repos/MateusStanki/FastSales.back-end/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/MateusStanki/FastSales.back-end/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/MateusStanki/FastSales.back-end/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/MateusStanki/FastSales.back-end/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/MateusStanki/FastSales.back-end/labels{/name}",
    releases_url:
      "https://api.github.com/repos/MateusStanki/FastSales.back-end/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/MateusStanki/FastSales.back-end/deployments",
    created_at: "2018-11-24T19:09:21Z",
    updated_at: "2018-12-13T04:02:17Z",
    pushed_at: "2018-12-13T04:02:16Z",
    git_url: "git://github.com/MateusStanki/FastSales.back-end.git",
    ssh_url: "git@github.com:MateusStanki/FastSales.back-end.git",
    clone_url: "https://github.com/MateusStanki/FastSales.back-end.git",
    svn_url: "https://github.com/MateusStanki/FastSales.back-end",
    homepage: "",
    size: 420,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 158965906,
    node_id: "MDEwOlJlcG9zaXRvcnkxNTg5NjU5MDY=",
    name: "FastSales.front-end",
    full_name: "MateusStanki/FastSales.front-end",
    private: false,
    owner: {
      login: "MateusStanki",
      id: 32174637,
      node_id: "MDQ6VXNlcjMyMTc0NjM3",
      avatar_url: "https://avatars0.githubusercontent.com/u/32174637?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/MateusStanki",
      html_url: "https://github.com/MateusStanki",
      followers_url: "https://api.github.com/users/MateusStanki/followers",
      following_url:
        "https://api.github.com/users/MateusStanki/following{/other_user}",
      gists_url: "https://api.github.com/users/MateusStanki/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/MateusStanki/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/MateusStanki/subscriptions",
      organizations_url: "https://api.github.com/users/MateusStanki/orgs",
      repos_url: "https://api.github.com/users/MateusStanki/repos",
      events_url: "https://api.github.com/users/MateusStanki/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/MateusStanki/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/MateusStanki/FastSales.front-end",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/MateusStanki/FastSales.front-end",
    forks_url:
      "https://api.github.com/repos/MateusStanki/FastSales.front-end/forks",
    keys_url:
      "https://api.github.com/repos/MateusStanki/FastSales.front-end/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/MateusStanki/FastSales.front-end/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/MateusStanki/FastSales.front-end/teams",
    hooks_url:
      "https://api.github.com/repos/MateusStanki/FastSales.front-end/hooks",
    issue_events_url:
      "https://api.github.com/repos/MateusStanki/FastSales.front-end/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/MateusStanki/FastSales.front-end/events",
    assignees_url:
      "https://api.github.com/repos/MateusStanki/FastSales.front-end/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/MateusStanki/FastSales.front-end/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/MateusStanki/FastSales.front-end/tags",
    blobs_url:
      "https://api.github.com/repos/MateusStanki/FastSales.front-end/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/MateusStanki/FastSales.front-end/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/MateusStanki/FastSales.front-end/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/MateusStanki/FastSales.front-end/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/MateusStanki/FastSales.front-end/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/MateusStanki/FastSales.front-end/languages",
    stargazers_url:
      "https://api.github.com/repos/MateusStanki/FastSales.front-end/stargazers",
    contributors_url:
      "https://api.github.com/repos/MateusStanki/FastSales.front-end/contributors",
    subscribers_url:
      "https://api.github.com/repos/MateusStanki/FastSales.front-end/subscribers",
    subscription_url:
      "https://api.github.com/repos/MateusStanki/FastSales.front-end/subscription",
    commits_url:
      "https://api.github.com/repos/MateusStanki/FastSales.front-end/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/MateusStanki/FastSales.front-end/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/MateusStanki/FastSales.front-end/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/MateusStanki/FastSales.front-end/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/MateusStanki/FastSales.front-end/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/MateusStanki/FastSales.front-end/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/MateusStanki/FastSales.front-end/merges",
    archive_url:
      "https://api.github.com/repos/MateusStanki/FastSales.front-end/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/MateusStanki/FastSales.front-end/downloads",
    issues_url:
      "https://api.github.com/repos/MateusStanki/FastSales.front-end/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/MateusStanki/FastSales.front-end/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/MateusStanki/FastSales.front-end/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/MateusStanki/FastSales.front-end/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/MateusStanki/FastSales.front-end/labels{/name}",
    releases_url:
      "https://api.github.com/repos/MateusStanki/FastSales.front-end/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/MateusStanki/FastSales.front-end/deployments",
    created_at: "2018-11-24T19:09:47Z",
    updated_at: "2018-11-24T19:13:02Z",
    pushed_at: "2018-11-24T19:13:01Z",
    git_url: "git://github.com/MateusStanki/FastSales.front-end.git",
    ssh_url: "git@github.com:MateusStanki/FastSales.front-end.git",
    clone_url: "https://github.com/MateusStanki/FastSales.front-end.git",
    svn_url: "https://github.com/MateusStanki/FastSales.front-end",
    homepage: null,
    size: 158,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 155202803,
    node_id: "MDEwOlJlcG9zaXRvcnkxNTUyMDI4MDM=",
    name: "projeto-senac",
    full_name: "MateusStanki/projeto-senac",
    private: false,
    owner: {
      login: "MateusStanki",
      id: 32174637,
      node_id: "MDQ6VXNlcjMyMTc0NjM3",
      avatar_url: "https://avatars0.githubusercontent.com/u/32174637?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/MateusStanki",
      html_url: "https://github.com/MateusStanki",
      followers_url: "https://api.github.com/users/MateusStanki/followers",
      following_url:
        "https://api.github.com/users/MateusStanki/following{/other_user}",
      gists_url: "https://api.github.com/users/MateusStanki/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/MateusStanki/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/MateusStanki/subscriptions",
      organizations_url: "https://api.github.com/users/MateusStanki/orgs",
      repos_url: "https://api.github.com/users/MateusStanki/repos",
      events_url: "https://api.github.com/users/MateusStanki/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/MateusStanki/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/MateusStanki/projeto-senac",
    description: "Projeto em grupo do senac",
    fork: false,
    url: "https://api.github.com/repos/MateusStanki/projeto-senac",
    forks_url: "https://api.github.com/repos/MateusStanki/projeto-senac/forks",
    keys_url:
      "https://api.github.com/repos/MateusStanki/projeto-senac/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/MateusStanki/projeto-senac/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/MateusStanki/projeto-senac/teams",
    hooks_url: "https://api.github.com/repos/MateusStanki/projeto-senac/hooks",
    issue_events_url:
      "https://api.github.com/repos/MateusStanki/projeto-senac/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/MateusStanki/projeto-senac/events",
    assignees_url:
      "https://api.github.com/repos/MateusStanki/projeto-senac/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/MateusStanki/projeto-senac/branches{/branch}",
    tags_url: "https://api.github.com/repos/MateusStanki/projeto-senac/tags",
    blobs_url:
      "https://api.github.com/repos/MateusStanki/projeto-senac/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/MateusStanki/projeto-senac/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/MateusStanki/projeto-senac/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/MateusStanki/projeto-senac/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/MateusStanki/projeto-senac/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/MateusStanki/projeto-senac/languages",
    stargazers_url:
      "https://api.github.com/repos/MateusStanki/projeto-senac/stargazers",
    contributors_url:
      "https://api.github.com/repos/MateusStanki/projeto-senac/contributors",
    subscribers_url:
      "https://api.github.com/repos/MateusStanki/projeto-senac/subscribers",
    subscription_url:
      "https://api.github.com/repos/MateusStanki/projeto-senac/subscription",
    commits_url:
      "https://api.github.com/repos/MateusStanki/projeto-senac/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/MateusStanki/projeto-senac/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/MateusStanki/projeto-senac/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/MateusStanki/projeto-senac/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/MateusStanki/projeto-senac/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/MateusStanki/projeto-senac/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/MateusStanki/projeto-senac/merges",
    archive_url:
      "https://api.github.com/repos/MateusStanki/projeto-senac/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/MateusStanki/projeto-senac/downloads",
    issues_url:
      "https://api.github.com/repos/MateusStanki/projeto-senac/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/MateusStanki/projeto-senac/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/MateusStanki/projeto-senac/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/MateusStanki/projeto-senac/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/MateusStanki/projeto-senac/labels{/name}",
    releases_url:
      "https://api.github.com/repos/MateusStanki/projeto-senac/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/MateusStanki/projeto-senac/deployments",
    created_at: "2018-10-29T11:47:16Z",
    updated_at: "2018-12-10T10:41:24Z",
    pushed_at: "2018-12-10T10:41:23Z",
    git_url: "git://github.com/MateusStanki/projeto-senac.git",
    ssh_url: "git@github.com:MateusStanki/projeto-senac.git",
    clone_url: "https://github.com/MateusStanki/projeto-senac.git",
    svn_url: "https://github.com/MateusStanki/projeto-senac",
    homepage: null,
    size: 100620,
    stargazers_count: 0,
    watchers_count: 0,
    language: "Java",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 128096960,
    node_id: "MDEwOlJlcG9zaXRvcnkxMjgwOTY5NjA=",
    name: "simple-so-mirror",
    full_name: "MateusStanki/simple-so-mirror",
    private: false,
    owner: {
      login: "MateusStanki",
      id: 32174637,
      node_id: "MDQ6VXNlcjMyMTc0NjM3",
      avatar_url: "https://avatars0.githubusercontent.com/u/32174637?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/MateusStanki",
      html_url: "https://github.com/MateusStanki",
      followers_url: "https://api.github.com/users/MateusStanki/followers",
      following_url:
        "https://api.github.com/users/MateusStanki/following{/other_user}",
      gists_url: "https://api.github.com/users/MateusStanki/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/MateusStanki/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/MateusStanki/subscriptions",
      organizations_url: "https://api.github.com/users/MateusStanki/orgs",
      repos_url: "https://api.github.com/users/MateusStanki/repos",
      events_url: "https://api.github.com/users/MateusStanki/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/MateusStanki/received_events",
      type: "User",
      site_admin: false
    },
    html_url: "https://github.com/MateusStanki/simple-so-mirror",
    description: "An react app with lastest questions of StackOverflow",
    fork: false,
    url: "https://api.github.com/repos/MateusStanki/simple-so-mirror",
    forks_url:
      "https://api.github.com/repos/MateusStanki/simple-so-mirror/forks",
    keys_url:
      "https://api.github.com/repos/MateusStanki/simple-so-mirror/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/MateusStanki/simple-so-mirror/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/MateusStanki/simple-so-mirror/teams",
    hooks_url:
      "https://api.github.com/repos/MateusStanki/simple-so-mirror/hooks",
    issue_events_url:
      "https://api.github.com/repos/MateusStanki/simple-so-mirror/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/MateusStanki/simple-so-mirror/events",
    assignees_url:
      "https://api.github.com/repos/MateusStanki/simple-so-mirror/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/MateusStanki/simple-so-mirror/branches{/branch}",
    tags_url: "https://api.github.com/repos/MateusStanki/simple-so-mirror/tags",
    blobs_url:
      "https://api.github.com/repos/MateusStanki/simple-so-mirror/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/MateusStanki/simple-so-mirror/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/MateusStanki/simple-so-mirror/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/MateusStanki/simple-so-mirror/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/MateusStanki/simple-so-mirror/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/MateusStanki/simple-so-mirror/languages",
    stargazers_url:
      "https://api.github.com/repos/MateusStanki/simple-so-mirror/stargazers",
    contributors_url:
      "https://api.github.com/repos/MateusStanki/simple-so-mirror/contributors",
    subscribers_url:
      "https://api.github.com/repos/MateusStanki/simple-so-mirror/subscribers",
    subscription_url:
      "https://api.github.com/repos/MateusStanki/simple-so-mirror/subscription",
    commits_url:
      "https://api.github.com/repos/MateusStanki/simple-so-mirror/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/MateusStanki/simple-so-mirror/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/MateusStanki/simple-so-mirror/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/MateusStanki/simple-so-mirror/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/MateusStanki/simple-so-mirror/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/MateusStanki/simple-so-mirror/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/MateusStanki/simple-so-mirror/merges",
    archive_url:
      "https://api.github.com/repos/MateusStanki/simple-so-mirror/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/MateusStanki/simple-so-mirror/downloads",
    issues_url:
      "https://api.github.com/repos/MateusStanki/simple-so-mirror/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/MateusStanki/simple-so-mirror/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/MateusStanki/simple-so-mirror/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/MateusStanki/simple-so-mirror/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/MateusStanki/simple-so-mirror/labels{/name}",
    releases_url:
      "https://api.github.com/repos/MateusStanki/simple-so-mirror/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/MateusStanki/simple-so-mirror/deployments",
    created_at: "2018-04-04T17:30:19Z",
    updated_at: "2018-11-24T19:10:07Z",
    pushed_at: "2018-08-14T14:33:53Z",
    git_url: "git://github.com/MateusStanki/simple-so-mirror.git",
    ssh_url: "git@github.com:MateusStanki/simple-so-mirror.git",
    clone_url: "https://github.com/MateusStanki/simple-so-mirror.git",
    svn_url: "https://github.com/MateusStanki/simple-so-mirror",
    homepage: "https://somirror.herokuapp.com/",
    size: 158,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: {
      key: "mit",
      name: "MIT License",
      spdx_id: "MIT",
      url: "https://api.github.com/licenses/mit",
      node_id: "MDc6TGljZW5zZTEz"
    },
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  }
];

const repo = {
  id: 119555550,
  node_id: "MDEwOlJlcG9zaXRvcnkxMTk1NTU1NTA=",
  name: "better-playlists",
  full_name: "MateusStanki/better-playlists",
  private: false,
  owner: {
    login: "MateusStanki",
    id: 32174637,
    node_id: "MDQ6VXNlcjMyMTc0NjM3",
    avatar_url: "https://avatars0.githubusercontent.com/u/32174637?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/MateusStanki",
    html_url: "https://github.com/MateusStanki",
    followers_url: "https://api.github.com/users/MateusStanki/followers",
    following_url:
      "https://api.github.com/users/MateusStanki/following{/other_user}",
    gists_url: "https://api.github.com/users/MateusStanki/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/MateusStanki/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/MateusStanki/subscriptions",
    organizations_url: "https://api.github.com/users/MateusStanki/orgs",
    repos_url: "https://api.github.com/users/MateusStanki/repos",
    events_url: "https://api.github.com/users/MateusStanki/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/MateusStanki/received_events",
    type: "User",
    site_admin: false
  },
  html_url: "https://github.com/MateusStanki/better-playlists",
  description: "React playlists prototype with Spotify API",
  fork: false,
  url: "https://api.github.com/repos/MateusStanki/better-playlists",
  forks_url: "https://api.github.com/repos/MateusStanki/better-playlists/forks",
  keys_url:
    "https://api.github.com/repos/MateusStanki/better-playlists/keys{/key_id}",
  collaborators_url:
    "https://api.github.com/repos/MateusStanki/better-playlists/collaborators{/collaborator}",
  teams_url: "https://api.github.com/repos/MateusStanki/better-playlists/teams",
  hooks_url: "https://api.github.com/repos/MateusStanki/better-playlists/hooks",
  issue_events_url:
    "https://api.github.com/repos/MateusStanki/better-playlists/issues/events{/number}",
  events_url:
    "https://api.github.com/repos/MateusStanki/better-playlists/events",
  assignees_url:
    "https://api.github.com/repos/MateusStanki/better-playlists/assignees{/user}",
  branches_url:
    "https://api.github.com/repos/MateusStanki/better-playlists/branches{/branch}",
  tags_url: "https://api.github.com/repos/MateusStanki/better-playlists/tags",
  blobs_url:
    "https://api.github.com/repos/MateusStanki/better-playlists/git/blobs{/sha}",
  git_tags_url:
    "https://api.github.com/repos/MateusStanki/better-playlists/git/tags{/sha}",
  git_refs_url:
    "https://api.github.com/repos/MateusStanki/better-playlists/git/refs{/sha}",
  trees_url:
    "https://api.github.com/repos/MateusStanki/better-playlists/git/trees{/sha}",
  statuses_url:
    "https://api.github.com/repos/MateusStanki/better-playlists/statuses/{sha}",
  languages_url:
    "https://api.github.com/repos/MateusStanki/better-playlists/languages",
  stargazers_url:
    "https://api.github.com/repos/MateusStanki/better-playlists/stargazers",
  contributors_url:
    "https://api.github.com/repos/MateusStanki/better-playlists/contributors",
  subscribers_url:
    "https://api.github.com/repos/MateusStanki/better-playlists/subscribers",
  subscription_url:
    "https://api.github.com/repos/MateusStanki/better-playlists/subscription",
  commits_url:
    "https://api.github.com/repos/MateusStanki/better-playlists/commits{/sha}",
  git_commits_url:
    "https://api.github.com/repos/MateusStanki/better-playlists/git/commits{/sha}",
  comments_url:
    "https://api.github.com/repos/MateusStanki/better-playlists/comments{/number}",
  issue_comment_url:
    "https://api.github.com/repos/MateusStanki/better-playlists/issues/comments{/number}",
  contents_url:
    "https://api.github.com/repos/MateusStanki/better-playlists/contents/{+path}",
  compare_url:
    "https://api.github.com/repos/MateusStanki/better-playlists/compare/{base}...{head}",
  merges_url:
    "https://api.github.com/repos/MateusStanki/better-playlists/merges",
  archive_url:
    "https://api.github.com/repos/MateusStanki/better-playlists/{archive_format}{/ref}",
  downloads_url:
    "https://api.github.com/repos/MateusStanki/better-playlists/downloads",
  issues_url:
    "https://api.github.com/repos/MateusStanki/better-playlists/issues{/number}",
  pulls_url:
    "https://api.github.com/repos/MateusStanki/better-playlists/pulls{/number}",
  milestones_url:
    "https://api.github.com/repos/MateusStanki/better-playlists/milestones{/number}",
  notifications_url:
    "https://api.github.com/repos/MateusStanki/better-playlists/notifications{?since,all,participating}",
  labels_url:
    "https://api.github.com/repos/MateusStanki/better-playlists/labels{/name}",
  releases_url:
    "https://api.github.com/repos/MateusStanki/better-playlists/releases{/id}",
  deployments_url:
    "https://api.github.com/repos/MateusStanki/better-playlists/deployments",
  created_at: "2018-01-30T15:32:22Z",
  updated_at: "2018-11-24T19:10:59Z",
  pushed_at: "2018-02-03T00:15:40Z",
  git_url: "git://github.com/MateusStanki/better-playlists.git",
  ssh_url: "git@github.com:MateusStanki/better-playlists.git",
  clone_url: "https://github.com/MateusStanki/better-playlists.git",
  svn_url: "https://github.com/MateusStanki/better-playlists",
  homepage: "",
  size: 144,
  stargazers_count: 0,
  watchers_count: 0,
  language: "JavaScript",
  has_issues: true,
  has_projects: true,
  has_downloads: true,
  has_wiki: true,
  has_pages: false,
  forks_count: 0,
  mirror_url: null,
  archived: false,
  open_issues_count: 0,
  license: null,
  forks: 0,
  open_issues: 0,
  watchers: 0,
  default_branch: "master",
  network_count: 0,
  subscribers_count: 0
};
