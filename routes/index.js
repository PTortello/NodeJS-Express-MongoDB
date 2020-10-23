const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

router.get('/', auth, function(req, res) {
    console.log(res.locals.auth_data);
    return res.send({message: 'Essa informação é muito importante!'});
});

router.post('/', function(req, res) {
    return res.send({message: 'Tudo ok com o método POST da raiz'});
});

module.exports = router;
