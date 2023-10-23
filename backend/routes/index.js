const cors = require("cors")
const bodyParser = require("body-parser")
const livros = require("./livrosRoute.js")

module.exports = (app) => {
    app.use(cors());
    app.use(bodyParser.json(), livros);
  };