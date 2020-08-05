import { Request, Response } from 'express';
import GetTweetService from '../services/GetTweetService';

const getTweetService = new GetTweetService();

export default class TweetController {
  async find(request: Request, response: Response): Promise<Response> {
    const { hashtag } = request.body;
    try {
      const tweet = await getTweetService.execute({ hashtag });

      return response.json(tweet);
    } catch (error) {
      return response.status(422).json({ error: error.message });
    }
  }
}
