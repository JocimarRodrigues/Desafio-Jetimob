const cors = require("cors")
const bodyParser = require("body-parser")
const admin = require("./adminRoute.js")
const livros = require("./livrosRoute.js")

module.exports = (app) => {
    app.use(cors());
    app.use(bodyParser.json(), admin, livros);
  };