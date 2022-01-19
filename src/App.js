import React from "react";
import './App.css';
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";

function App() {
  const [token, setToken] = useState();

  // Set so the code only runs once the page is loaded
  useEffect(() => {
    // Function made in spotify config file
    const hash = getTokenFromUrl();

    // Hide the access token from url (good practice)
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }

    console.log("token", token);
  }, []);

  return <div className="app">{token ? <h1>Logged in</h1> : <Login />}</div>;
}

export default App;
