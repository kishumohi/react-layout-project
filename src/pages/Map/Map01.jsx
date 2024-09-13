import { useEffect, useState } from "react";
import AppLayout from "../../AppLayout.jsx";

import "./Map01.css";

function Map01() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setUsers(json);
        setFilteredUsers(json); // Initialize filteredUsers with all users
      });
  }, []);

  const handleSearch = (query) => {
    setSearch(query);
    const lowercasedQuery = query.toLowerCase();
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredUsers(filtered);
  };

  return (
    <AppLayout>
      <div className="container">
        <h1>Data Display From API By Map</h1>
        <div className="con-wrapper">
          <div className="InputContainer">
            <input
              placeholder="Search.."
              id="input"
              className="input"
              name="text"
              type="text"
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
          {/* <button onClick={() => handleSearch(search)}>Search</button> */}
        </div>
        <div className="card">
          {filteredUsers.map((item, index) => (
            <div key={index} className="card-item">
              <h2>{item.name}</h2>
              <p>{item.email}</p>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}

export default Map01;
