const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: process.env.CACHE_TTL || 3600 });

const cacheMiddleware = (req, res, next) => {
    const key = req.originalUrl;
    const cached = cache.get(key);

    if (cached) {
        return res.json({ source: 'cache', ...cached });
    }

    // Intercept res.json to auto-cache the response
    const originalJson = res.json.bind(res);
    res.json = (body) => {
        if (body?.success) {
            cache.set(key, body);
        }
        return originalJson(body);
    };

    next();
};

module.exports = cacheMiddleware;