import { PrismaClient, User } from "@prisma/client";


const prisma = new PrismaClient();

const insertIntoDB = async (data: User): Promise<User> => {

    const result = await prisma.user.create(
        {
            data
        }
    )

    return result;

}


const insertOrUpdateIntoDB = async (data: User): Promise<User> => {

    const result = await prisma.user.upsert(
        {
            where: {
                id: data.id
            },
            update: data,
            create: data
        }
    )

    return result;

}


const getUsers = async (): Promise<User[]> => {
    const result = await prisma.user.findMany(
        {
            include: {
                Profile: true
            }
        },

    );
    return result;
}


const getSingleUser = async (id: number): Promise<User | null> => {

    const result = await prisma.user.findUnique(
        {
            where: {
                id
            },
            include: {
                Profile: true
            }
        }
    )
    return result;
}


export const UserService = {
    insertIntoDB,
    insertOrUpdateIntoDB,
    getUsers,
    getSingleUser
}