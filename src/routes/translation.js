const router = require('express').Router();
const cache = require('../middleware/cache');
const { getSurahTranslation, getLanguages } = require('../controllers/translationController');

router.get('/languages', cache, getLanguages);
router.get('/:number/:lang', cache, getSurahTranslation);

module.exports = router;