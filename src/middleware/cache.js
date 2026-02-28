const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: process.env.CACHE_TTL || 3600 });

const cacheMiddleware = (req, res, next) => {
    const key = req.originalUrl;
    const cached = cache.get(key);

    if (cached) {
        return res.json({ source: 'cache', data: cached });
    }

    res.sendCachedResponse = (data) => cache.set(key, data);
    next();
};

module.exports = cacheMiddleware;
