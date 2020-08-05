import { Router } from 'express';

import TweetController from '../controllers/TweetController';
const tweetsRouter = Router();

const tweetController = new TweetController();

tweetsRouter.post('/', tweetController.find);

export default tweetsRouter;
