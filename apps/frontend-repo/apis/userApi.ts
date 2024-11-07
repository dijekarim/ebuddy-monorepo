import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from 'shared';
import * as jose from 'jose';
import { auth } from '@/config/firebase';

const BASE_URI = process.env.BE_URI ?? 'http://localhost:5000';
const SECRET_KEY = new TextEncoder().encode(process.env.SECRET_KEY ?? '2eR2BdpAOqf3V256L8UG');
console.log(auth.currentUser);

const token = await new jose.SignJWT({ email: 'asd@email.com'})
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime('1h')
    .sign(SECRET_KEY);

// Fetch users thunk
export const fetchUsers = createAsyncThunk<User[]>(
  'users/fetchUsers',
  async () => {    
    const response = await axios.get(`${BASE_URI}/fetch-user-data`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }); // Replace with your actual endpoint
    return response.data;
  }
);

// Fetch userData thunk
export const fetchUser = createAsyncThunk<User, { id: string }>(
  'users/fetchUser',
  async ({ id }) => {
    const response = await axios.get(`${BASE_URI}/fetch-user-data/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    ); // Replace with your actual endpoint
    return response.data;
  }
);

// Update user thunk
export const updateUser = createAsyncThunk<User, { id: string; data: Partial<User> }>(
  'users/updateUser',
  async ({ id, data }) => {
    const response = await axios.put(`${BASE_URI}/update-user-data/${id}`, data,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    ); // Replace with your actual endpoint
    return response.data;
  }
);
