import Tweet from '../models/tweet';
import Twit from 'twit';
import twitterkeys from '../config/keys';
interface tweet {
  hashtag: string;
}
interface ITweet {
  data?: object;
  created_at?: string;
  id?: Number;
  id_str?: string;
  text?: string;
}

class GetTweetService {
  private tweets: Tweet[];

  private twit = new Twit({
    consumer_key: twitterkeys.keys.CONSUMER_KEY,
    consumer_secret: twitterkeys.keys.CONSUMER_SECRET,
    access_token: twitterkeys.keys.ACCESS_TOKEN,
    access_token_secret: twitterkeys.keys.ACCESS_TOKEN_SECRET,
  });
  constructor() {
    this.tweets = [];
  }

  public async execute({ hashtag }: tweet): Promise<ITweet> {
    try {
      const tweet = await this.twit.get('search/tweets', {
        q: hashtag,
        count: 10,
      });
      this.tweets.push(tweet.data);
      return tweet.data;
    } catch (error) {
      throw new Error('ocorreu um erro ao buscar tweet');
    }
  }
}
export default GetTweetService;
