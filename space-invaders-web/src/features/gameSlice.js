import { createSlice } from '@reduxjs/toolkit';

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    score: 0,
    lives: 3,
    status: 'IDLE',
  },
  reducers: {
    startGame: (state) => {
      state.score = 0;
      state.lives = 3;
      state.status = 'PLAYING';
    },
    endGame: (state) => {
      state.status = 'GAMEOVER';
    },
    incrementScore: (state, action) => {
      state.score += action.payload;
    },
    playerHit: (state) => {
      state.lives -= 1;
      if (state.lives <= 0) state.status = 'GAMEOVER';
    },
  },
});

export const { startGame, endGame, incrementScore, playerHit } = gameSlice.actions;
export default gameSlice.reducer;
