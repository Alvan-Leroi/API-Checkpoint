import { useEffect, useState } from "react";
import axios from "axios";

function UserList() {
  const [listOfUser, setListOfUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")

      .then((response) => {
        setListOfUser(response.data);
        setLoading(false);
      })

      .catch((error) => {
        console.error(error);

        setError("Unable to load users.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2 className="status-message">Loading users...</h2>;
  }

  if (error) {
    return <h2 className="status-message">{error}</h2>;
  }

  return (
    <div className="user-list">
      {listOfUser.map((user) => (
        <div className="user-card" key={user.id}>
          <div className="avatar">{user.name.charAt(0)}</div>

          <h2>{user.name}</h2>

          <p>
            <strong>Username:</strong> {user.username}
          </p>

          <p>
            <strong>Email:</strong> {user.email}
          </p>

          <p>
            <strong>Phone:</strong> {user.phone}
          </p>

          <p>
            <strong>Company:</strong> {user.company.name}
          </p>

          <p>
            <strong>City:</strong> {user.address.city}
          </p>

          <a href={`https://${user.website}`} target="_blank" rel="noreferrer">
            Visit Website
          </a>
        </div>
      ))}
    </div>
  );
}

export default UserList;
