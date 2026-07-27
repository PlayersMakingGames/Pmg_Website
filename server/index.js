// Minimal static-file server for Railway: serves the built frontend (dist/)
// and falls back to index.html for any unmatched path, since this is a
// client-side-routed SPA (React Router). Zero dependencies beyond Node
// itself — mirrors FocusSim/server/index.js's style, just without the KV
// API layer, since this site has no backend needs.
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.join(__dirname, "..", "dist");
const PORT = process.env.PORT || 8080;

if (!fs.existsSync(DIST_DIR)) {
  console.error(`No build found at ${DIST_DIR}. Run "npm run build" first.`);
  process.exit(1);
}

const MIME = {
  ".html": "text/html", ".js": "text/javascript", ".css": "text/css",
  ".json": "application/json", ".png": "image/png", ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg", ".svg": "image/svg+xml", ".ico": "image/x-icon",
};

function serveStatic(req, res, pathname) {
  const safePath = path.normalize(pathname).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(DIST_DIR, safePath === "/" ? "index.html" : safePath);
  if (!filePath.startsWith(DIST_DIR)) { res.writeHead(403); res.end(); return; }
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Unknown path (e.g. /about, /games) — hand it to the SPA's router
      // instead of a bare 404.
      fs.readFile(path.join(DIST_DIR, "index.html"), (err2, data2) => {
        if (err2) { res.writeHead(404); res.end("Not found"); return; }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data2);
      });
      return;
    }
    res.writeHead(200, { "Content-Type": MIME[path.extname(filePath)] || "application/octet-stream" });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  serveStatic(req, res, url.pathname);
});

server.listen(PORT, () => {
  console.log(`PlayersMakingGames site running at http://localhost:${PORT}`);
});
