const router = require('express').Router();
const cache = require('../middleware/cache');
const { getAyah, getAyahsBySurah } = require('../controllers/ayahController');

router.get('/surah/:number', cache, getAyahsBySurah);
router.get('/:surah/:ayah', cache, getAyah);

module.exports = router;