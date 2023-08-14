
import { Request, Response } from 'express';


const insertIntoDB = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const user = await User.create(data);
        res.status(201).json({ user });
    } catch (error) {
        res.status(500).json({ error });
    }

}

const insertOrUpdateIntoDB = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const user = await User.insertOrUpdateIntoDB(data);
        res.status(201).json({ user });
    } catch (error) {
        res.status(500).json({ error });
    }

}

const getUser = async (req: Request, res: Response) => {
    try {
        const user = await User.getUser();
        res.status(201).json({ user });
    } catch (error) {
        res.status(500).json({ error });
    }

}

const singleUser = async (req: Request, res: Response) => {
    try {
        const user = await User.singleUser(req.params.id);
        res.status(201).json({ user });
    } catch (error) {
        res.status(500).json({ error });
    }

}

export const UserController = {
    insertIntoDB,
    insertOrUpdateIntoDB,
    getUser,
    singleUser
}