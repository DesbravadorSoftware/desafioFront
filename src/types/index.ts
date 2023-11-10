export interface UserData {
  login: string;
  followers: number;
  following: number;
  email: string;
  bio: string;
  avatar_url: string;
}

export interface DSearchProps {
  onSearch: (userData: UserData) => void;
}

export interface RepoData {
  name: string;
  description: string;
  stargazers_count: number;
  stargazers_url: string;
  language: string;
  html_url: string;
}

export interface DTableReposProps {
  repos: RepoData[];
  onRepoSelect: (repo: RepoData) => void;
}
