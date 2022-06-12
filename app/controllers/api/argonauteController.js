const argonauteDatamapper = require("../../models/argonauteDatamapper");

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

    // addArgonaute: async (req, res) => {
    //     try {
    //         const name = req.body;
    //         console.log("je suis dans le 1er console.log", name);
    //         const bodyErrors = [];
    //         if(!name) {
    //             bodyErrors.push('name cannot be empty');
    //         }
    //         if (bodyErrors.lenght) {
    //             // si on a une erreur
    //             res.status(400).json(bodyErrors);
    //         } else {
    //             let newArgonaute = await argonauteDatamapper.insert(name);
    //             console.log(newArgonaute);
    //             //res.redirect('home');
    //         }
    //     } catch (error) {
    //         console.trace(error);
    //         res.status(500).json(error.toString());
    //       }
    // }

    // addArgonaute: async (req, res) => {
    //     try {
    //         const argonaute = await argonauteDatamapper.isUnique(req.body);
    //     if (argonaute) {
    //         let field;
    //         if (argonaute.name === req.body.name) {
    //             field = 'name';
    //         } // throw new ApiError(`Category already exists with this ${field}`, { statusCode: 400 });
    //         res.send('`Argonaute already exists with this ${field}`')
    //     }
    //     const savedArgonaute = await argonauteDatamapper.insert(req.body);
    //     return res.json(savedArgonaute);
    //     } catch (error) {
    //         console.trace(error);
    //         res.status(500).json(error.toString());
    //     }
    // },

    addArgonaute: async (req, res) => {
        try {
            //const argonaute = req.body;
            //console.log(Object.values(argonaute));
            
            if(req.body.name ==="") {
                const listOfArgonautes = await argonauteDatamapper.findAll();
                console.log('je suis dans le if');
                return res.render('home', { listOfArgonautes,
                    error: 'Veuillez renseigner ce champs'
                })
            } else {
                await argonauteDatamapper.insert(req.body);
                const listOfArgonautes = await argonauteDatamapper.findAll();
                return res.render('home', { listOfArgonautes,
                    // le mieux serait de faire un res.render ou rens.back 
                    // avec le tableau , si vide, je rempli le tableau avec l'erreur
                    succeed: 'Votre argonaute à bien été ajouté'
                })
                
            }
           

            // if(!argonaute) {
            //     res.status(400).json(
            //         {
            //             code: "missing_name",
            //             message: "Le champ ne peut pas être vide"
            //         }
            //     );
            // }

            //Je test la présence des paramètres 
            // const bodyErrors = [];
            // if(argonaute="") {
            //     bodyErrors.push('Le champs ne peut pas être vide, merci de renseigner un nom');
            // }
            // if(bodyErrors.lenght) {
            //     res.status(400).send(bodyErrors);
            // } else {
            //     const addArgonaute = await argonauteDatamapper.insert(argonaute);
            // }
            // En général on aime sur une route en POST renvoyer en json
            // l'élément qu'on vient de créer
            // res.json(addArgonaute);
            // res.redirect('/');
            // return res.render('home');
    
        } catch(error) {
            console.trace(error);
            res.status(500).json(error.toString());
        }
    },
}

module.exports = argonauteController;