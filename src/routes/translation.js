const router = require('express').Router();
const { getSurahTranslation, getLanguages } = require('../controllers/translationController');

router.get('/languages', getLanguages);
router.get('/:number/:lang', getSurahTranslation);

module.exports = router;
