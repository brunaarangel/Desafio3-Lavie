import {randomUUID} from 'node:crypto';
import { User } from '../database/models/user.model.js';

export const findOneUserById = async (req, res) => {
    const {id} =  req.params

    const user = await findOneUserById(id);

    if(!user) {
        return res.status(404).json({message: "NOT FOUND"});
    }

    return res.status(200).json({user});
}

export const findAllUsers = async(req, res) => {
    const users = findAllUsers;

    return res.status(200).json({users: global.users});
}

export const createUser = async (req, res) => {
    const {name} = req.body;

    const user = await createUserRepository(name);

    return res.status(201).json({ user });
}

export const updateUserById = async (req, res) => {
    const {id} = req.headers;
    const {name} = req.body;

    const user = await updateUserRepository(id);

    return res.status(202).json({ user });
}

export const deleteUserById = async (req, res) => {
    const {id} = req.headers;

    await deleteUserById(id);

    return res.status(204).send();
}