"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = __importDefault(require("./routes"));
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var port = process.env.PORT || 4000;
routes_1.default(app);
app.listen(port, function () { return console.log("server started on " + port); });
