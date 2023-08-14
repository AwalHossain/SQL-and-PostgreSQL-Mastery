import { Request, Response } from "express";



const createPost = async (req: Request, res: Response) => {
    try{
        const data = req.body
        const result = await PostService.createPost(data)
        res.send(result)
    }catch(err){
        res.send(err)
    }
}

const getAllPosts = async (req: Request, res: Response) => {
    try{
        const result = await PostService.getAllPosts()

        res.send({
            success: true,
            message: "Post deleted Successfully!",
            data: result
        })
    }catch(err){
        res.send(err)
    }
}


const deletePost = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    try{
        const result = await PostService.deletePost(id)

        res.send({
            success: true,
            message: "Post deleted Successfully!",
            data: result
        })

    }catch(err){
        res.send(err)
    
    }
}


const learnAggregrateAndGrouping = async (req: Request, res: Response) => {

    try {
        const result = await PostService.learnAggregateAndGrouping();
        res.send({
            success: true,
            message: "Result!",
            data: result
        })
    } catch (err) {
        res.send(err)
    }
}


export const PostController = {
    createPost,
    getAllPosts,
    deletePost,
    learnAggregrateAndGrouping
}
