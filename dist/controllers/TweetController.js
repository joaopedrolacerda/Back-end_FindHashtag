"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _GetTweetService = _interopRequireDefault(require("../services/GetTweetService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getTweetService = new _GetTweetService.default();

class TweetController {
  async find(request, response) {
    const {
      hashtag
    } = request.body;

    try {
      const tweet = await getTweetService.execute({
        hashtag
      });
      return response.json(tweet);
    } catch (error) {
      return response.status(422).json({
        error: error.message
      });
    }
  }

}

exports.default = TweetController;