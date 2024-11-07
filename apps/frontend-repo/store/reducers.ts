import { User } from "@/apis/user";
import { fetchUser, fetchUsers, updateUser } from "@/apis/userApi";
import { createSlice } from "@reduxjs/toolkit";

export enum stateStatusEnum {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed'
}

interface UsersState {
  users: User[];
  status: string;
  error: string | null;
  user?: User;
}

const initialState: UsersState = {
  users: [],
  status: stateStatusEnum.IDLE,
  error: null,
};

// Create the slice
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = stateStatusEnum.LOADING;
        state.error = '';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = stateStatusEnum.SUCCEEDED;
        state.users = action.payload; // Store the list of users
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = stateStatusEnum.FAILED;
        state.error = action.error.message ?? '';
      });

    builder
      .addCase(updateUser.pending, (state) => {
        state.status = stateStatusEnum.LOADING;
        state.error = '';
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.status = stateStatusEnum.SUCCEEDED;
        // Find and update the user in the state
        const index = state.users.findIndex((user) => user.id === action.payload.id);
        if (index !== -1) {
          state.users[index] = action.payload;
        }
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.status = stateStatusEnum.FAILED;
        state.error = action.error.message ?? 'Failed to update user';
      });

    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = stateStatusEnum.LOADING;
        state.error = '';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = stateStatusEnum.SUCCEEDED;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = stateStatusEnum.FAILED;
        state.error = action.error.message ?? 'Failed to update user';
      });
  },
});

export default usersSlice.reducer;