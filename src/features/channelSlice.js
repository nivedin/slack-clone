import { createSlice } from '@reduxjs/toolkit';

export const channelSlice = createSlice({
  name: 'channel',
  initialState: {
    roomId: null,
  },
  reducers: {
     enterRoom:(state,action) => {
       state.roomId = action.payload.roomId;
     }
  },
});

export const { enterRoom } = channelSlice.actions;

export const selectRoomId = state => state.channel.roomId;

export default channelSlice.reducer;
