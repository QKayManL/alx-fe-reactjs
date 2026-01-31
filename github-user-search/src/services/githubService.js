import axios from "axios";

export const fetchAdvancedUsers = async ({
  username,
  location,
  minRepos,
}) => {
  let query = "";

  if (username) query += `${username}`;
  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const response = await axios.get(
    `https://api.github.com/search/users?q=${query}`,
    {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`,
      },
    }
  );

  return response.data;
};
import axios from "axios";

export const fetchUserData = async (params) => {
  const { username, location, minRepos } = params;

  let query = username;

  if (location) query += `+location:${location}`;
  if (minRepos) query += `+repos:>=${minRepos}`;

  const response = await axios.get(
    `https://api.github.com/search/users?q=${query}`
  );

  return response.data;
};
