const router = require('express').Router();
const { getAyah, getAyahsBySurah } = require('../controllers/ayahController');

router.get('/:surah/:ayah', getAyah);
router.get('/surah/:number', getAyahsBySurah);

module.exports = router;
