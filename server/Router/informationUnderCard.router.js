const router = require('express').Router();

const InformationUnderCard = require('../Models/informationUnderCard.model');

router.route('/').get((req, res) => {
    InformationUnderCard.find()
        .then(dataCas => res.json(dataCas))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const informationUnderCard = req.body;
    const newInformationUnderCard = new InformationUnderCard(informationUnderCard);

    newInformationUnderCard.save()
        .then(() => res.json('InformationUnderCard added!'))
        .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;
