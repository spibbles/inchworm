const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");
const bodyParser = require("body-parser");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const jsonParser = bodyParser.json()

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;

    if (req.method === "POST" && pathname === "/api/chatgpt") {
      // Parse JSON bodies
      jsonParser(req, res, async (error) => {
        console.error(error)
        if (pathname === "/api/chatgpt" && req.method === "POST") {
          const { messages } = req.body;
          const apiKey = process.env.OPENAI_API_KEY;
          const url = "https://api.openai.com/v1/chat/completions";

          const body = JSON.stringify({
            messages,
            model: "gpt-3.5-turbo",
            stream: false,
          });

          try {
            const response = await fetch(url, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`,
              },
              body,
            });
            const data = await response.json();
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ data, success: true }));
          } catch (error) {
            console.log(error);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: error.message }));
          }
        } else {
          handle(req, res, parsedUrl);
        }
      });
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
