import { configureStore } from '@reduxjs/toolkit';

import auth from '../features/auth/authSlice'
import post from '../features/post/postSlice'
import user from '../features/user/userSlice'
import review from '../features/review/reviewSlice'

export const store = configureStore({
  reducer: {
    auth,
    post,
    user,
    review,
  },
  middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: false
        })
});