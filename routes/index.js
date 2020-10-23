const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    return res.send({message: 'Essa informação é muito importante!'});
});

router.post('/', function(req, res) {
    return res.send({message: 'Tudo ok com o método POST da raiz'});
});

module.exports = router;
