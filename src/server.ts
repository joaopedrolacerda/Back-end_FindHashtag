import 'babel-polyfill';
import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, function () {
  console.log(`server running in port 3333`);
});
