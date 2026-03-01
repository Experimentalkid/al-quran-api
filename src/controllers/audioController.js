const axios = require('axios');
const BASE = process.env.QURAN_BASE_URL;

const RECITERS = {
    alafasy: 'ar.alafasy',
    minshawi: 'ar.minshawi',
    husary: 'ar.husary',
    abdulbasit: 'ar.abdulbasit',
};

exports.getReciters = (req, res) => {
    res.json({ success: true, reciters: Object.keys(RECITERS) });
};

exports.getAudioSurah = async (req, res, next) => {
    try {
        const { number, reciter } = req.params;
        const edition = RECITERS[reciter];
        if (!edition) {
            return res.status(400).json({
                success: false,
                message: `Reciter "${reciter}" not supported. Use /api/audio/reciters to see supported options.`,
            });
        }
        const { data } = await axios.get(`${BASE}/surah/${number}/${edition}`);
        const audioLinks = data.data.ayahs.map(a => ({
            ayah: a.numberInSurah,
            audio: a.audio,
        }));
        res.json({ success: true, reciter, surah: number, data: audioLinks });
    } catch (err) { next(err); }
};