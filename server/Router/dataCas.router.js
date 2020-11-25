const router = require('express').Router();

const DataCas = require('../Models/dataCas.model');

router.route('/').get((req, res) => {
    DataCas.find()
        .then(dataCas => res.json(dataCas))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const dataCas = req.body;
    const newDataCas = new DataCas(dataCas);

    newDataCas.save()
        .then(() => res.json('DataCas added!'))
        .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;
