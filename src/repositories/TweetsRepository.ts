import Tweet from '../models/tweet';
import Twit from 'twit';

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

class TweetRepository {
  private tweets: Tweet[];

  private twit = new Twit({
    consumer_key: 'a2Vs2nsse9iGvgSsJiRBqCbxo',
    consumer_secret: 'mfIsDZogTqAVwBiMpGGcuW9m1U7BlVaIhONa3ajvq3aWwEscjl',
    access_token: '719616677865000960-MFhjCUJzmoOqo8jAYT2IKzrU0DXRP0W',
    access_token_secret: 'Ao3x5Accxhix6pZWgqD6jPMYdhPxeA3LKKcQOm28Xc9v0',
  });
  constructor() {
    this.tweets = [];
  }
  public all(): Tweet[] {
    return this.tweets;
  }
  public async find({ hashtag }: tweet): Promise<ITweet> {
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
export default TweetRepository;
