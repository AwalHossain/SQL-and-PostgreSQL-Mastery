import exporess from 'express';
import { PostController } from './post.controller';

const route = exporess.Router();



route.post('/create-post', PostController.createPost);
route.get('/', PostController.getAllPosts);


export const PostRoute = route;