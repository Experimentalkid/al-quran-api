const errorHandler = (err, req, res, next) => {
    console.error(`[ERROR] ${req.method} ${req.originalUrl} —`, err.message);

    if (err.response) {
        return res.status(err.response.status).json({
            success: false,
            message: 'Not found or invalid request',
        });
    }

    res.status(500).json({
        success: false,
        message: err.message || 'Internal Server Error',
    });
};

module.exports = errorHandler;