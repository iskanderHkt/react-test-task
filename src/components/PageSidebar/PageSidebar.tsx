import {
  MenuItem,
  Select,
  SelectChangeEvent,
  Slider,
  Switch,
} from "@mui/material";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../store";
import {
  setXValue,
  setYValue,
  setOpacityValue,
  setScaleValue,
  setSpeedValue,
  setBlurValue,
  setDelayValue,
  setEasing,
  setReplay,
} from "../../features/animationSlice"; // Путь к вашему slice

const StyledSlider = styled(Slider)({
  width: "118px",
  color: "#AFAFAF",
  height: 6,
  "& .MuiSlider-track": {
    border: "none",
  },
  "& .MuiSlider-thumb": {
    height: 18,
    width: 18,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
      boxShadow: "inherit",
    },
    "&::before": {
      display: "none",
    },
  },
  "& .MuiSlider-valueLabel": {
    lineHeight: 1.2,
    fontSize: 12,
    background: "unset",
    padding: 0,
    width: 32,
    height: 32,
    borderRadius: "50% 50% 50% 0",
    backgroundColor: "#52af77",
    transformOrigin: "bottom left",
    transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
  },
});

const PageSidebar = () => {
  //   const [xValue, setXValue] = useState(0);
  //   const [yValue, setYValue] = useState(0);
  //   const [opacityValue, setOpacityValue] = useState(0);
  //   const [scaleValue, setScaleValue] = useState(0);
  //   const [speedValue, setSpeedValue] = useState(0);
  //   const [blurValue, setBlurValue] = useState(0);
  //   const [delayValue, setDelayValue] = useState(0);
  //   const [easing, setEasing] = useState("ease");
  //   const [replay, setReplay] = useState(false);

  const dispatch = useDispatch();

  const xValue = useSelector((state: RootState) => state.animation.xValue);
  const yValue = useSelector((state: RootState) => state.animation.yValue);
  const opacityValue = useSelector(
    (state: RootState) => state.animation.opacityValue
  );
  const scaleValue = useSelector(
    (state: RootState) => state.animation.scaleValue
  );
  const speedValue = useSelector(
    (state: RootState) => state.animation.speedValue
  );
  const blurValue = useSelector(
    (state: RootState) => state.animation.blurValue
  );
  const delayValue = useSelector(
    (state: RootState) => state.animation.delayValue
  );
  const easing = useSelector((state: RootState) => state.animation.easing);
  const replay = useSelector((state: RootState) => state.animation.replay);
  return (
    <div
      className="left-sidebar"
      style={{ backgroundColor: "#fff", width: "100%", height: "100vh" }}
    >
      <ul>
        <li
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "46px",
              display: "flex",
              justifyContent: "end",
              padding: "0 10px",
            }}
          >
            <span className="param-text">X</span>
          </div>
          <StyledSlider
            style={{ width: "118px", color: "#AFAFAF" }}
            value={xValue}
            onChange={(_event: Event, newValue: number | number[]) => {
              if (typeof newValue === "number") dispatch(setXValue(newValue));
            }}
            min={-200}
            max={200}
            step={1}
            size="small"
            aria-label="Small"
          />
          <div
            style={{
              width: "30px",
              display: "flex",
              justifyContent: "start",
              padding: "0 10px",
            }}
          >
            <span>{xValue}</span>
          </div>
        </li>

        <li
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "46px",
              display: "flex",
              justifyContent: "end",
              padding: "0 10px",
            }}
          >
            <span className="param-text">Y</span>
          </div>
          <StyledSlider
            style={{ width: "118px", color: "#AFAFAF" }}
            value={yValue}
            onChange={(_event: Event, newValue: number | number[]) => {
              if (typeof newValue === "number") dispatch(setYValue(newValue));
            }}
            min={-200}
            max={200}
            step={1}
            aria-label="Small"
          />
          <div
            style={{
              width: "30px",
              display: "flex",
              justifyContent: "start",
              padding: "0 10px",
            }}
          >
            <span>{yValue}</span>
          </div>
        </li>

        <li
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "46px",
              display: "flex",
              justifyContent: "end",
              padding: "0 10px",
            }}
          >
            <span className="param-text">Opacity</span>
          </div>
          <StyledSlider
            style={{ width: "118px", color: "#AFAFAF" }}
            value={opacityValue}
            onChange={(_event: Event, newValue: number | number[]) => {
              if (typeof newValue === "number")
                dispatch(setOpacityValue(newValue));
            }}
            min={0}
            max={100}
            step={1}
            // size="small"
            aria-label="Small"
          />
          <div
            style={{
              width: "30px",
              display: "flex",
              justifyContent: "start",
              padding: "0 10px",
            }}
          >
            <span>{opacityValue}%</span>
          </div>
        </li>

        <li
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "46px",
              display: "flex",
              justifyContent: "end",
              padding: "0 10px",
            }}
          >
            <span className="param-text">Scale</span>
          </div>
          <StyledSlider
            style={{ width: "118px", color: "#AFAFAF" }}
            value={scaleValue}
            onChange={(_event: Event, newValue: number | number[]) => {
              if (typeof newValue === "number")
                dispatch(setScaleValue(newValue));
            }}
            min={0}
            max={2}
            step={0.1}
            // size="small"
            aria-label="Small"
          />
          <div
            style={{
              width: "30px",
              display: "flex",
              justifyContent: "start",
              padding: "0 10px",
            }}
          >
            <span>{scaleValue}</span>
          </div>
        </li>

        <li
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "46px",
              display: "flex",
              justifyContent: "end",
              padding: "0 10px",
            }}
          >
            <span className="param-text">Blur</span>
          </div>
          <StyledSlider
            style={{ width: "118px", color: "#AFAFAF" }}
            value={blurValue}
            onChange={(_event: Event, newValue: number | number[]) => {
              if (typeof newValue === "number")
                dispatch(setBlurValue(newValue));
            }}
            min={0}
            max={10}
            step={0.5}
            // size="small"
            aria-label="Small"
          />
          <div
            style={{
              width: "30px",
              display: "flex",
              justifyContent: "start",
              padding: "0 10px",
            }}
          >
            <span>{blurValue}</span>
          </div>
        </li>

        <li
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "46px",
              display: "flex",
              justifyContent: "end",
              padding: "0 10px",
            }}
          >
            <span className="param-text">Speed</span>
          </div>
          <StyledSlider
            style={{ width: "118px", color: "#AFAFAF" }}
            value={speedValue}
            onChange={(_event: Event, newValue: number | number[]) => {
              if (typeof newValue === "number")
                dispatch(setSpeedValue(newValue));
            }}
            min={0}
            max={5}
            step={0.1}
            // size="small"
            aria-label="Small"
          />
          <div
            style={{
              width: "30px",
              display: "flex",
              justifyContent: "start",
              padding: "0 10px",
            }}
          >
            <span>{speedValue}s</span>
          </div>
        </li>

        <li
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "46px",
              display: "flex",
              justifyContent: "end",
              padding: "0 10px",
            }}
          >
            <span className="param-text">Delay</span>
          </div>
          <StyledSlider
            style={{ width: "118px", color: "#AFAFAF" }}
            value={delayValue}
            onChange={(_event: Event, newValue: number | number[]) => {
              if (typeof newValue === "number")
                dispatch(setDelayValue(newValue));
            }}
            min={0}
            max={10}
            step={0.5}
            // size="small"
            aria-label="Small"
          />
          <div
            style={{
              width: "30px",
              display: "flex",
              justifyContent: "start",
              padding: "0 10px",
            }}
          >
            <span>{delayValue}s</span>
          </div>
        </li>
        <li>
          <span className="param-text">Easing</span>
          <Select
            size="small"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={easing}
            label="Easing"
            onChange={(event: SelectChangeEvent) => {
              dispatch(setEasing(event.target.value as string));
            }}
          >
            <MenuItem value={"ease"}>Ease</MenuItem>
            <MenuItem value={"linear"}>Linear</MenuItem>
            <MenuItem value={"ease-in"}>Ease-in</MenuItem>
            <MenuItem value={"ease-out"}>Ease-out</MenuItem>
            <MenuItem value={"ease-in-out"}>Ease-in-out</MenuItem>
          </Select>
        </li>
        <li>
          <span className="param-text">Replay</span>
          <Switch
            checked={replay}
            color="primary"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              dispatch(setReplay(event.target.checked));
            }}
            inputProps={{ "aria-label": "controlled" }}
          />
        </li>
      </ul>
    </div>
  );
};

export default PageSidebar;
