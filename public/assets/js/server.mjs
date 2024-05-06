import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const port = 3000;
const app = express();

const serveStatic = (route, directory) => {
  app.use(route, express.static(join(__dirname, directory)));
};

serveStatic("/assets/css", "../../assets/css");
serveStatic("/assets/js", "../../assets/js");
serveStatic("/assets/img", "../../assets/img");
serveStatic("/assets/fonts", "../../assets/fonts");
serveStatic("/assets/bootstrap", "../../assets/bootstrap");

const serveHTML = (route, file) => {
  app.get(route, (req, res) => res.sendFile(join(__dirname, file)));
};

const htmlRoutes = [
  { route: "/", file: "../../index.html" },
  { route: "/tos", file: "../../tos.html" },
  { route: "/privacy", file: "../../privacy.html" },
  { route: "/morbius", file: "../../morbius.html" },
  { route: "/invite", file: "../../invite.html" },
  { route: "/support", file: "../../support.html" },
  { route: "/partners", file: "../../partners.html" },
  { route: "/profiles/:userId", file: "../../profiles.html" },
];

htmlRoutes.forEach(route => serveHTML(route.route, route.file));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
