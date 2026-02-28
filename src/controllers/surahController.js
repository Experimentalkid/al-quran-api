const axios = require('axios');
const BASE = process.env.QURAN_BASE_URL;

exports.getAllSurahs = async (req, res, next) => {
    try {
        const { data } = await axios.get(`${BASE}/surah`);
        res.json({ success: true, total: data.data.length, data: data.data });
    } catch (err) {
        res.status(404).json({
            success: false,
            message: 'Something went wrong',
        });
    }
};

exports.getSurah = async (req, res, next) => {
    const { number } = req.params;
    try {
        const { data } = await axios.get(`${BASE}/surah/${number}`);
        res.json({ success: true, data: data.data });
    } catch (err) {
        res.status(404).json({
            success: false,
            message: `Surah ${number} not found. Please use a number between 1 and 114.`,
        });
    }
};
