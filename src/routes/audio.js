const router = require('express').Router();
const { getAudioSurah, getReciters } = require('../controllers/audioController');

router.get('/reciters', getReciters);
router.get('/:number/:reciter', getAudioSurah);

module.exports = router;