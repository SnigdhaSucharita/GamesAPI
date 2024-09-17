const cors = require("cors");
const express = require('express');
const app = express();
const { getAllGames, getGameById } = require("./controllers/index.js");

app.use(cors());
app.use(express.json());

app.get("/games", (req, res) => {
  const games = getAllGames();
  res.json({games});
});

app.get("/games/details/:id", (req, res) => {
  const game = getGameById(parseInt(req.params.id));
  res.json({game});
});

module.exports = { app };
