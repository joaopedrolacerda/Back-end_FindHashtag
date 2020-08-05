import { Router } from 'express';

import Tweets from '../models/tweet';
import TweetsRepository from '../repositories/TweetsRepository';

const tweetsRouter = Router();
const tweetRepository = new TweetsRepository();

const tweets: Tweets[] = [];

tweetsRouter.post('/', async (request, response) => {
  const { hashtag } = request.body;
  try {
    const tweet = await tweetRepository.find({ hashtag });

    return response.json(tweet);
  } catch (error) {
    return response.status(422).json({ error: error.message });
  }
});

export default tweetsRouter;
