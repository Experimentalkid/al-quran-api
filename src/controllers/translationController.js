const axios = require('axios');
const BASE = process.env.QURAN_BASE_URL;

const EDITIONS = {
    english: 'en.asad',
    urdu: 'ur.maududi',
    french: 'fr.hamidullah',
    indonesian: 'id.indonesian',
    turkish: 'tr.ates',
};

// GET surah with translation
exports.getSurahTranslation = async (req, res, next) => {
    try {
        const { number, lang } = req.params;
        const edition = EDITIONS[lang] || EDITIONS['english'];
        const { data } = await axios.get(`${BASE}/surah/${number}/${edition}`);
        res.json({ success: true, language: lang, data: data.data });
    } catch (err) { next(err); }
};

// GET available languages
exports.getLanguages = (req, res) => {
    res.json({ success: true, supported: Object.keys(EDITIONS) });
};
