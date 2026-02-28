const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const surahRoutes = require('./routes/surah');
const ayahRoutes = require('./routes/ayah');
const translationRoutes = require('./routes/translation');
const audioRoutes = require('./routes/audio');

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/surah', surahRoutes);
app.use('/api/ayah', ayahRoutes);
app.use('/api/translation', translationRoutes);
app.use('/api/audio', audioRoutes);

// Health check
app.get('/', (req, res) => {
    res.json({ message: '📖 Al-Quran API is running!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
