import cors from 'cors';
import express from 'express';
import { PostRoute } from './modules/post/post.route';


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/post', PostRoute )

export default app;