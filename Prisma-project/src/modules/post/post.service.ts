

import { Post, PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();
const createPost = async({...data}:Post)=>{

    const post = await prisma.post.create({
        data
    }
    );

    return post

}

const getAllPosts = async(options: any)=>{
    const {sortBy, sortOrder, page, limit, searchTerms} = options;

    const skip = parseInt(page) * parseInt(limit) - parseInt(limit) || 0;
    const take = limit | 5;
    
    return await prisma.$transaction(async(tx)=>{
        const result = await tx.post.findMany({
            skip,
            take,
            include:{
                author:true,
                category: true
            },
            orderBy: sortBy && sortOrder ? {
                [sortBy]: sortOrder
            }: {
                createdAt: 'desc'
            },
            where: {
                OR: [
                    {
                        title: {
                            contains: searchTerms,
                            mode: 'insensitive'
                        }
                    },
                    {
                        author:{
                            name:{
                                contains: searchTerms,
                                mode: 'insensitive'
                            }
                        }
                    }
                ]
            }
        })

        const total = await tx.post.count();
        return {
            data: result,
            total
        }
    })
}



export const PostService = {
    createPost,
    getAllPosts
}