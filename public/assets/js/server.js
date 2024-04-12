import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(express.json());

app.get("/", (req, res) => res.sendFile("index.html", { root: __dirname }));
app.get("/tos", (req, res) => res.sendFile("tos.html", { root: __dirname }));
app.get("/privacy", (req, res) =>
  res.sendFile("privacy.html", { root: __dirname })
);
app.get("/morbius", (req, res) =>
  res.sendFile("morbius.html", { root: __dirname })
);
app.get("/invite", (req, res) =>
  res.sendFile("invite.html", { root: __dirname })
);
app.get("/support", (req, res) =>
  res.sendFile("support.html", { root: __dirname })
);
app.get("/partners", (req, res) =>
  res.sendFile("partners.html", { root: __dirname })
);

app.listen(port, () => {
  console.log(`API is running on port ${port}`);
});

app.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
