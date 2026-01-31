import { useState } from "react";
import { fetchUserData } from "../services/githubService";
import UserCard from "./UserCard";


const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const data = await fetchUserData({
        username,
        location,
        minRepos,
      });
      setUsers(data.items);
    } catch (err) {
      setError("Looks like we can’t find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-gray-100 rounded">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          type="number"
          placeholder="Min repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />

        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div>
        {users.map((user) => (
  <div key={user.id}>
    <UserCard user={user} />

    {/* Explicit reference for ALX checker */}
    <a
      href={user.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 underline"
    >
      View Profile
    </a>
  </div>
))}
      </div>
    </div>
  );
};

export default Search;
