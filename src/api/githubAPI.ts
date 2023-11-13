import axios from "axios";

const GITHUB_API_BASE_URL = "https://api.github.com";

const githubAPI = axios.create({
  baseURL: GITHUB_API_BASE_URL,
});

export async function getUserDetailsAndRepos(username: string) {
  try {
    const [userDetailsResponse, userReposResponse] = await Promise.all([
      githubAPI.get(`/users/${username}`),
      githubAPI.get(`/users/${username}/repos`),
    ]);

    const userDetails = userDetailsResponse.data;
    const userRepos = userReposResponse.data;

    return { userDetails, userRepos };
  } catch (error) {
    console.error("Error fetching user details and repositories:", error);
    throw error;
  }
}
