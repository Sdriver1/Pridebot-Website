import express from "express";
import bodyParser from "body-parser";
import fetch from "node-fetch";

const app = express();
const port = 3000;

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(express.json());

app.get("/", (req, res) => res.sendFile("index.html", { root: __dirname }));
app.get("/tos", (req, res) => res.sendFile("tos.html", { root: __dirname }));
app.get("/privacy", (req, res) =>
  res.sendFile("privacy.html", { root: __dirname }),
);
app.get("/morbius", (req, res) =>
  res.sendFile("morbius.html", { root: __dirname }),
);
app.get("/invite", (req, res) =>
  res.sendFile("invite.html", { root: __dirname }),
);
app.get("/partners", (req, res) =>
  res.sendFile("partners.html", { root: __dirname }),
);

app.listen(port, () => {
  console.log(`API is running on port ${port}`);
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/wumpus", (req, res) => {
  let userid = req.body.userId;
  let botid = req.body.botId;

  //Add whatever you want to do when there was a vote here
  console.log(userid + " just voted for " + botid);
});

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`),
);
