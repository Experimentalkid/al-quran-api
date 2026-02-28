const axios = require('axios');
const BASE = process.env.QURAN_BASE_URL;

// GET specific ayah (e.g. 2:255 = Al-Kursi)
exports.getAyah = async (req, res, next) => {
    try {
        const { surah, ayah } = req.params;
        const { data } = await axios.get(`${BASE}/ayah/${surah}:${ayah}`);
        res.json({ success: true, data: data.data });
    } catch (err) { next(err); }
};

// GET all ayahs of a surah
exports.getAyahsBySurah = async (req, res, next) => {
    try {
        const { number } = req.params;
        const { data } = await axios.get(`${BASE}/surah/${number}/quran-uthmani`);
        res.json({ success: true, total: data.data.ayahs.length, data: data.data.ayahs });
    } catch (err) { next(err); }
}; 
