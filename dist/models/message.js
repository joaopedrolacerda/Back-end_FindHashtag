"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _uuidv = require("uuidv4");

class message {
  constructor(user, text, date, type) {
    this.id = (0, _uuidv.uuid)();
    this.user = user;
    this.text = text;
    this.date = date;
    this.type = type;
  }

}

var _default = message;
exports.default = _default;