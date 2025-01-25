import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: "" };

const filterSlice = createSlice({
	name: "filter",
	initialState,
	reducers: {
		changeFilter(state, action) {
			state.name = action.payload;
		},
	},
});

export const { changeFilter } = filterSlice.action;
export default filterSlice.reducer;
