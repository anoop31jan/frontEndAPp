const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {

    app.use('/taskservice/api/v1/member/list/678904/taskDetails', createProxyMiddleware({
        target: 'http://localhost:8083',
        changeOrigin: false,
    }));

};