const app = require("./app");
const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
  `Server listening on port http://localhost:${PORT}`;
});
