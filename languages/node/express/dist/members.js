"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = __importDefault(require("./User"));
var serhii = new User_1.default('Serhii Cho');
var anna = new User_1.default('Anna Korotchaeva');
var diana = new User_1.default('Diana Sedniva');
var json = [
    { first: serhii.getFirst, last: serhii.getLast },
    { first: anna.getFirst, last: anna.getLast },
    { first: diana.getFirst, last: diana.getLast },
];
exports.default = json;
