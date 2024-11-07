"use client"

import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { fetchUser, updateUser } from '@/apis/userApi';
import { Box, Button, TextField, Typography } from '@mui/material';

const EditUser: React.FC = () => {
  // Only call useRouter on client-side
  const router = useRouter();
  
  const { id } = useParams(); // Get the user ID from the URL
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.users);
  
  useEffect(() => {
    dispatch(fetchUser({ id }));
  }, [dispatch, id]);

  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');
  
  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (id && name && email) {
      dispatch(updateUser({ id: id as string, data: { name, email } }));
      router.push('/'); // Redirect back to the users list or wherever appropriate
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        maxWidth: 400,
        margin: 'auto',
        mt: 4,
        p: 2,
        border: '1px solid #ccc',
        borderRadius: '8px',
      }}
    >
      <Typography variant="h5" component="div" gutterBottom>
        Edit User # {name}
      </Typography>

      <TextField
        label="Name"
        variant="outlined"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        required
      />

      <TextField
        label="Email"
        variant="outlined"
        name="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        required
      />

      <Button type="submit" variant="contained" color="primary">
        Save Changes
      </Button>
    </Box>
  );
};

export default EditUser;
