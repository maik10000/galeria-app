import { createSlice } from '@reduxjs/toolkit';

const  initialState = {
    id: null,
    name: '',
    email: '',
    photos:[],
    token:''
  }
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
        state.id = action.payload.id;
        state.name = action.payload.name;
        state.email = action.payload.email;
        state.photos = action.payload.photos;
        state.token = action.payload.token
    },
    clearUser: (state) => {
      state.id = null;
      state.name = '';
      state.email = '';
      state.photos = [];
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;