"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _TweetController = _interopRequireDefault(require("../controllers/TweetController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const tweetsRouter = (0, _express.Router)();
const tweetController = new _TweetController.default();
tweetsRouter.post('/', tweetController.find);
var _default = tweetsRouter;
exports.default = _default;