const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("element.json"); // Make sure this file exists
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const port = process.env.PORT || 5001;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
