const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

// CORS config (adjust domain if needed)
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://crucialniccur.github.io");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

server.use(middlewares);
server.use("/api", router);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`JSON Server running on port ${PORT}`);
});
