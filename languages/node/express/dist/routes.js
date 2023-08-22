"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (app) {
    app.get('/', function (req, res) { return res.send("<h1>go to /api/members</h1>"); });
    app.get('/api/members', function (req, res) { return res.json(members); });
});
