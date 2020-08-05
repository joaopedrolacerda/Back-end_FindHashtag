import { Router } from 'express';
import tweetsRouter from './tweets.routes';
const routes = Router();

routes.use('/tweets', tweetsRouter);

export default routes;
