import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SelectedComponentSlice {
  selectedComponent: string | null; // Здесь хранится id или имя выбранного компонента, например, "ContentHeader", "ContentText" и т.д.
}

const initialState: SelectedComponentSlice = {
  selectedComponent: null, // Изначально ни один компонент не выбран
};

const selectedComponentSlice = createSlice({
  name: "selectedComponent",
  initialState,
  reducers: {
    setSelectedComponent: (state, action: PayloadAction<string | null>) => {
      state.selectedComponent = action.payload;
    },
  },
});

export const { setSelectedComponent } = selectedComponentSlice.actions;

export default selectedComponentSlice.reducer;
