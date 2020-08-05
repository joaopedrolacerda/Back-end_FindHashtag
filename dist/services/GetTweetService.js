"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _twit = _interopRequireDefault(require("twit"));

var _keys = _interopRequireDefault(require("../config/keys"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class GetTweetService {
  twit = new _twit.default({
    consumer_key: _keys.default.keys.CONSUMER_KEY,
    consumer_secret: _keys.default.keys.CONSUMER_SECRET,
    access_token: _keys.default.keys.ACCESS_TOKEN,
    access_token_secret: _keys.default.keys.ACCESS_TOKEN_SECRET
  });

  constructor() {
    this.tweets = [];
  }

  async execute({
    hashtag
  }) {
    try {
      const tweet = await this.twit.get('search/tweets', {
        q: hashtag,
        count: 10
      });
      this.tweets.push(tweet.data);
      return tweet.data;
    } catch (error) {
      throw new Error('ocorreu um erro ao buscar tweet');
    }
  }

}

var _default = GetTweetService;
exports.default = _default;