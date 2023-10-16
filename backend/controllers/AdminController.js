const database = require("../models")

class AdminController {
    static async pegaAdmin(req, res) {
        try {
            const admin = await database.Admins.findOne({where: {nome: "John"}})
            return res.status(200).json(admin)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}

module.exports = AdminController