import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts } from "./operations";

const initialState = {
	items: [],
	loading: false,
	error: null,
};

const contactsSlice = createSlice({
	name: "contacts",
	initialState,
	extraReducers: (builder) => {
		builder
			.addCase(fetchContacts.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchContacts.fulfilled, (state, action) => {
				state.loading = false;
				state.items = action.payload;
			})
			.addCase(fetchContacts.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			});
	},
});

export default contactsSlice.reducer;
