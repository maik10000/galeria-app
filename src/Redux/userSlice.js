import { createSlice } from '@reduxjs/toolkit';

const  initialState = {
    id: null,
    name: '',
    age:0,
    email: '',
    phone:'',
    token:'',
    token_type:'',
    expires:0,
    iat:0,
    active:0,
  }
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => ({  ...state, ...action.payload }),

    clearUser: (state) => (state = initialState),
    expToken: (state) => {

         console.log(state.token)
    }
  },
});

export const { setUser, clearUser, expToken } = userSlice.actions;

export default userSlice.reducer;