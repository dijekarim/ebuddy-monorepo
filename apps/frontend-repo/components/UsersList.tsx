"use client"

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { fetchUsers } from '@/apis/userApi';
import { stateStatusEnum } from '@/store/reducers';
import { useRouter } from 'next/navigation';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const UsersComponent: React.FC = () => {
  const dispatch = useDispatch();
  const { users, status, error } = useSelector((state: RootState) => state.users);
  // Only call useRouter on client-side
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = typeof window !== 'undefined' ? useRouter() : null;

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  // Handle navigation to the edit page
  const handleEditUser = (id: string) => {
    // You can also add an optional check to ensure this runs client-side
    if (router) {
      router.push(`/users/edit/${id}`);
    }
  };

  if (status === stateStatusEnum.LOADING) return <p>Loading...</p>;
  if (status === stateStatusEnum.FAILED) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Users List</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Button variant='contained' size='small' onClick={() => handleEditUser(user.id)}>Edit</Button>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UsersComponent;
