import express from "express";
import path from "path";

const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname)));
app.use(express.json());

app.get("/", (req, res) => res.sendFile(path.resolve(__dirname, "index.html")));
app.get("/tos", (req, res) =>
  res.sendFile(path.resolve(__dirname, "tos.html"))
);
app.get("/privacy", (req, res) =>
  res.sendFile(path.resolve(__dirname, "privacy.html"))
);
app.get("/morbius", (req, res) =>
  res.sendFile(path.resolve(__dirname, "morbius.html"))
);
app.get("/invite", (req, res) =>
  res.sendFile(path.resolve(__dirname, "invite.html"))
);
app.get("/support", (req, res) =>
  res.sendFile(path.resolve(__dirname, "support.html"))
);
app.get("/partners", (req, res) =>
  res.sendFile(path.resolve(__dirname, "partners.html"))
);

app.get("/profiles/:userId", (req, res) =>
  res.sendFile(path.resolve(__dirname, "profiles.html"))
);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
