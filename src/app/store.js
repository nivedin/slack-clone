import { configureStore } from '@reduxjs/toolkit';
import channelReducer from '../features/channelSlice';

export default configureStore({
  reducer: {
    channel: channelReducer,
  },
});
