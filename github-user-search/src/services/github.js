import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`,
  },
});

export const searchUsers = (query) =>
  api.get(`/search/users?q=${query}`);
