
import { Request, Response } from 'express';
import { UserService } from './user.service';


const insertIntoDB = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const user = await UserService.insertIntoDB(data);
        res.status(201).json({ user });
    } catch (error) {
        res.status(500).json({ error });
    }

}

const insertOrUpdateIntoDB = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const user = await UserService.insertOrUpdateIntoDB(data);
        res.status(201).json({ user });
    } catch (error) {
        res.status(500).json({ error });
    }

}

const getUsers = async (req: Request, res: Response) => {
    try {
        const user = await UserService.getUsers();
        res.status(201).json({ user });
    } catch (error) {
        res.status(500).json({ error });
    }

}

const singleUser = async (req: Request, res: Response) => {
    const id = req.params.id
    try {
        const user = await UserService.getSingleUser(Number(id));
        res.status(201).json({ user });
    } catch (error) {
        res.status(500).json({ error });
    }

}

export const UserController = {
    insertIntoDB,
    insertOrUpdateIntoDB,
    getUsers,
    singleUser
}