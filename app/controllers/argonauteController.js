const argonauteDatamapper = require("../models/argonauteDatamapper");

const argonauteController = {

    getAllArgonautes: async (_, res) => {
            try {
              const listOfArgonautes = await argonauteDatamapper.findAll();
              console.log(listOfArgonautes);
              res.render('home', { listOfArgonautes });

            } catch (error) {
              console.trace(error);
              res.status(500).json(error.toString());
            }
    },

    addArgonaute: async (req, res) => {
        const data = req.body;
        try {
            if(data.name ==="") {
                const listOfArgonautes = await argonauteDatamapper.findAll();
                //console.log('je suis dans le if');
                return res.render('home', { listOfArgonautes,
                    error: 'Veuillez renseigner ce champs'
                })

            } else {
                await argonauteDatamapper.insert(data);
                const listOfArgonautes = await argonauteDatamapper.findAll();
                return res.render('home', { 
                    listOfArgonautes,
                    succeed: 'Votre argonaute à bien été ajouté'
                    })
            } 

        } catch(error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    },

}

module.exports = argonauteController;