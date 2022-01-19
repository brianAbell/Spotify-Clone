// Used so that our spotify API logic stays organized

// URL where we need to authenticate using Spotify.
export const authEndpoint = "https://accounts.spotify.com/authorize";
// Gave in the Spotify Web API settings, this states where to take back the user if the Spotify login was successful.
const redirectUri = "https://localhost:3000/";
// Provided by spotify for verification
const clientId = "6651b23db4ef414ab0e05fea9fa100a2";

// Permissions which you need to ask Spotify for
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

// Obtains the access token after login to authenticate the user
export const getTokenFromUrl = () => {
    return window.location.hash
      .substring(1)
      .split("&")
      .reduce((initial, item) => {
        let parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
      }, {});
  };

// Called to authorize a user. Contains Client ID and all permissions so Spotify knows
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;