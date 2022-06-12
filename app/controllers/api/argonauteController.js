const argonauteDatamapper = require("../../models/argonauteDatamapper");

const argonauteController = {

    homePage: (req,res)=>{
        res.render('home')
    },

    getAllArgonautes: async (_, res) => {
            try {
              const allArgonautes = await argonauteDatamapper.findAll();
              res.render('home', (allArgonautes));

            } catch (error) {
              console.trace(error);
              res.status(500).json(error.toString());
            }
    },
}

module.exports = argonauteController;