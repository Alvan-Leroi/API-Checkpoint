import UserList from "./UserList";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <p className="small-title">JSONPLACEHOLDER API</p>

        <h1>User Directory</h1>

        <p>Users loaded from an external API using React Hooks and Axios.</p>
      </header>

      <UserList />
    </div>
  );
}

export default App;
