"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var members_1 = __importDefault(require("./members"));
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var port = process.env.PORT || 4000;
app.get('/', function (req, res) { return res.send("<h1>go to /api/members</h1>"); });
app.get('/api/members', function (req, res) { return res.json(members_1.default); });
app.listen(port, function () { return console.log("server started on " + port); });
