const network = require("./../controllers/network.controllers");

const router = require('express').Router();

router.get('/',network.getAll);
router.get('/:id',network.get);
router.post('/',network.createNetwork);
router.put('/:id',network.updateNetwork);
router.delete('/:id',network.delete);
router.delete('/',network.deleteAll);

module.exports = router;
