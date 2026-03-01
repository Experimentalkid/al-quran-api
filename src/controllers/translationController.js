const axios = require('axios');
const BASE = process.env.QURAN_BASE_URL;

const EDITIONS = {
    english: 'en.asad',
    urdu: 'ur.maududi',
    french: 'fr.hamidullah',
    indonesian: 'id.indonesian',
    turkish: 'tr.ates',
};

exports.getSurahTranslation = async (req, res, next) => {
    try {
        const { number, lang } = req.params;
        const edition = EDITIONS[lang];
        if (!edition) {
            return res.status(400).json({
                success: false,
                message: `Language "${lang}" not supported. Use /api/translation/languages to see supported options.`,
            });
        }
        const { data } = await axios.get(`${BASE}/surah/${number}/${edition}`);
        res.json({ success: true, language: lang, data: data.data });
    } catch (err) { next(err); }
};

exports.getLanguages = (req, res) => {
    res.json({ success: true, supported: Object.keys(EDITIONS) });
};