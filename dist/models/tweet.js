"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class tweet {
  constructor(data, create_at, id, id_str, text) {
    this.data = data;
    this.created_at = create_at;
    this.id = id;
    this.id_str = id_str;
    this.text = text;
  }

}

var _default = tweet;
exports.default = _default;