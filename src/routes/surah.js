const router = require('express').Router();
const cache = require('../middleware/cache');
const { getAllSurahs, getSurah } = require('../controllers/surahController');

router.get('/', cache, getAllSurahs);
router.get('/:number', cache, getSurah);

module.exports = router;