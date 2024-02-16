import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AnimationState {
  xValue: number;
  yValue: number;
  opacityValue: number;
  scaleValue: number;
  speedValue: number;
  blurValue: number;
  delayValue: number;
  easing: string;
  replay: boolean;
}

const initialState: AnimationState = {
  xValue: 0,
  yValue: 0,
  opacityValue: 0,
  scaleValue: 1,
  speedValue: 0,
  blurValue: 0,
  delayValue: 0,
  easing: "ease",
  replay: false,
};

export const animationSlice = createSlice({
  name: "animation",
  initialState,
  reducers: {
    setXValue: (state, action: PayloadAction<number>) => {
      state.xValue = action.payload;
    },
    setYValue: (state, action: PayloadAction<number>) => {
      state.yValue = action.payload;
    },
    setOpacityValue: (state, action: PayloadAction<number>) => {
      state.opacityValue = action.payload;
    },
    setScaleValue: (state, action: PayloadAction<number>) => {
      state.scaleValue = action.payload;
    },
    setSpeedValue: (state, action: PayloadAction<number>) => {
      state.speedValue = action.payload;
    },
    setBlurValue: (state, action: PayloadAction<number>) => {
      state.blurValue = action.payload;
    },
    setDelayValue: (state, action: PayloadAction<number>) => {
      state.delayValue = action.payload;
    },
    setEasing: (state, action: PayloadAction<string>) => {
      state.easing = action.payload;
    },
    setReplay: (state, action: PayloadAction<boolean>) => {
      state.replay = action.payload;
    },
  },
});

export const {
  setXValue,
  setYValue,
  setOpacityValue,
  setScaleValue,
  setSpeedValue,
  setBlurValue,
  setDelayValue,
  setEasing,
  setReplay,
} = animationSlice.actions;

export default animationSlice.reducer;
