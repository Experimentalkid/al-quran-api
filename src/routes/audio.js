const router = require('express').Router();
const cache = require('../middleware/cache');
const { getAudioSurah, getReciters } = require('../controllers/audioController');

router.get('/reciters', cache, getReciters);
router.get('/:number/:reciter', cache, getAudioSurah);

module.exports = router;