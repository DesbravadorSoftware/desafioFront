import axios from "axios";
import { UserData } from "../types";

const githubAPI = axios.create({
  baseURL: "https://api.github.com",
});

//const TIMEOUT_MS = 10000;

export async function getUserDetailsAndRepos(username: string) {
  try {
    const userDetails = await githubAPI.get<UserData>(`/users/${username}`);
    const userRepos = await githubAPI.get(`/users/${username}/repos`);
    return {
      userDetails: userDetails.data,
      userRepos: userRepos.data,
    };
  } catch (error) {
    console.error("Error fetching user details and repositories:", error);
    throw error;
  }
}
