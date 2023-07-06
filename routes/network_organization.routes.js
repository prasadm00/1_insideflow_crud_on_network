const network_organization = require("./../controllers/netwrok_organization.controllers");

const router = require('express').Router();

router.get('/',network_organization.getAll);
router.get('/:id',network_organization.get);
router.post('/',network_organization.createNetwork);
router.put('/:id',network_organization.updateNetwork);
router.delete('/:id',network_organization.delete);
router.delete('/',network_organization.deleteAll);

module.exports = router;
