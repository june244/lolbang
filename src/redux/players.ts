import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Player_List } from "../fixture/player-list";

export interface PlayerState {
  participated: Array<string>;
  blueTeam: Array<string>;
  redTeam: Array<string>;
}

const initialState: PlayerState = {
  // participated: Player_List,
  participated: [],
  blueTeam: [],
  redTeam: [],
};

export const playerSlice = createSlice({
  name: "player",
  initialState,

  reducers: {
    addParticipated: (state, action: PayloadAction<string>) => {
      state.participated.push(action.payload);
    },
    delParticipated: (state, action: PayloadAction<string>) => {
      const idx = state.participated.findIndex((p) => {
        return p !== action.payload;
      });
      if (idx > -1) state.participated.splice(idx, 1);
    },
    addBlueTeam: (state, action: PayloadAction<string>) => {
      state.blueTeam.push(action.payload);
    },
    delBlueTeam: (state, action: PayloadAction<string>) => {
      const idx = state.blueTeam.findIndex((p) => {
        return p !== action.payload;
      });
      if (idx > -1) state.blueTeam.splice(idx, 1);
    },
    addRedTeam: (state, action: PayloadAction<string>) => {
      state.redTeam.push(action.payload);
    },
    delRedTeam: (state, action: PayloadAction<string>) => {
      const idx = state.redTeam.findIndex((p) => {
        return p !== action.payload;
      });
      if (idx > -1) state.redTeam.splice(idx, 1);
    },
  },
});

export const {
  addParticipated,
  delParticipated,
  addBlueTeam,
  delBlueTeam,
  addRedTeam,
  delRedTeam,
} = playerSlice.actions;
export default playerSlice.reducer;
