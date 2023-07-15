const SteamAuth = require("node-steam-openid");

const steam = new SteamAuth({
  realm: "/",
  returnUrl: "/",
  apiKey: process.env.STEAM_WEB_API_KEY,
});

export default steam;
