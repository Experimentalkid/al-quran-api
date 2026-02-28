const axios = require('axios');
const BASE = process.env.QURAN_BASE_URL;

const RECITERS = {
    alafasy: 'ar.alafasy',
    minshawi: 'ar.minshawi',
    husary: 'ar.husary',
    abdulbasit: 'ar.abdulbasit',
};

// GET available reciters
exports.getReciters = (req, res) => {
    res.json({ success: true, reciters: Object.keys(RECITERS) });
};

// GET audio for a surah by reciter
exports.getAudioSurah = async (req, res, next) => {
    try {
        const { number, reciter } = req.params;
        const edition = RECITERS[reciter] || RECITERS['alafasy'];
        const { data } = await axios.get(`${BASE}/surah/${number}/${edition}`);
        const audioLinks = data.data.ayahs.map(a => ({
            ayah: a.numberInSurah,
            audio: a.audio,
        }));
        res.json({ success: true, reciter, surah: number, data: audioLinks });
    } catch (err) { next(err); }
}; 
