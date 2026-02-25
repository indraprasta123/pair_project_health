const { User, Profile, Symptoms, Booking, Disease } = require('../models')
const { Op } = require('sequelize')

class Controller {
    static async homePage(req, res){
        try {
            
        } catch (error) {
            res.send(error)
        }
    }
}

module.exports = Controller

