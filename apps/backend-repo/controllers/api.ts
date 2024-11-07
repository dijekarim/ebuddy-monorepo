import { Request, Response } from 'express';
import firebase from '../config/firebaseConfig';
import { User } from 'shared';

const db = firebase.firestore();

// Create new user
export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const data: Partial<User> = req.body;
    const user = await db.collection('users').add(data);
    res.status(201).json({ message: 'User created successfully', user: user });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
}

// Get a user by ID
export const getUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const doc = await db.collection('users').doc(id).get();
    if (doc.exists) {
      res.status(200).json({ id: doc.id, ...doc.data() });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user', error });
  }
};

// Get all users
export const getAllUsers = async (_req: Request, res: Response): Promise<void> => {
  try {
    const snapshot = await db.collection('users').get();
    const users: User[] = [];
    snapshot.forEach((doc) => users.push({ id: doc.id, ...doc.data() } as User));
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
};

// Update a user
export const updateUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const updatedData: Partial<User> = req.body;
    await db.collection('users').doc(id).update(updatedData);
    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error });
  }
};