import { useSelector } from "react-redux";
import logo from "../img/logo stroke.svg";
import { RootState } from "../store";
import ContentHeader from "../components/ContentHeader/ContentHeader";
import ContentButton from "../components/ContentButton/ContentButton";
import ContentImage from "../components/ContentImage/ContentImage";
import ContentText from "../components/ContentText/ContentText";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";





const AnimationPage = () => {
  const selectedComponent = useSelector(
    (state: RootState) => state.selectedComponent.selectedComponent
  );

    const animXValue =  useSelector((state: RootState) => state.animation.xValue) ;
    const animYValue = useSelector((state: RootState) => state.animation.yValue);
    const animOpacityValue = useSelector(
      (state: RootState) => state.animation.opacityValue
    );
    const animScaleValue = useSelector(
      (state: RootState) => state.animation.scaleValue
    );
    const animBlurValue = useSelector(
      (state: RootState) => state.animation.blurValue
    );
    const animSpeedValue = useSelector(
      (state: RootState) => state.animation.speedValue
    );
    const animDelayValue = useSelector(
      (state: RootState) => state.animation.delayValue
    );
    const animEasingValue = useSelector(
      (state: RootState) => state.animation.easing
    );
    const animReplayValue = useSelector(
      (state: RootState) => state.animation.replay
    );

    

  const anim = keyframes`
      0% {
          opacity: 100%;
          transform: translateX(0) translateY(0) scale(1);
          filter: blur(0px);
        },
        
        50% {
          opacity: ${100 + (animOpacityValue - 100)* 0.5}%;
          transform: translateX(${animXValue * 0.5}px) translateY(${animYValue * 0.5}px) scale(${1 + (animScaleValue - 1) * 0.5});
          filter: blur(${animBlurValue * 0.5}px);
        },
        
        100% {
          opacity: ${animOpacityValue}%;
          transform: translateX(${animXValue}px) translateY(${animYValue}px) scale(${animScaleValue});
          filter: blur(${animBlurValue}px);
        },
  `;

  const AnimatedComponent = styled.div`
    border: 2px solid black;
    animation: ${anim} ${animSpeedValue}s
      ${animEasingValue} ${animDelayValue}s
      ${animReplayValue === true ? "infinite" : "1"};
  `;

  return (
    <div
      style={{
        maxWidth: "1234px",
        margin: "0 auto",
        backgroundColor: "#E7EBE0",
      }}
    >
      <header
        style={{
          maxWidth: "1234px",
          width: "100%",
          height: "58px",
          backgroundColor: "#222222",
          top: "0",
          margin: "0 auto",

          padding: "14px",

          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to={"/"}>
          <img src={logo} alt="logo" />
        </Link>
        <button
          style={{
            width: "87px",
            height: "34px",
            borderRadius: "5px",
            backgroundColor: "#3E87F8",
            color: "#FFF",
            fontWeight: "500",
            fontSize: "14px",
          }}
        >
          Save
        </button>
      </header>
      <div
        style={{
          border: "5px solid black",
          backgroundColor: "#E7EBE0",
          width: "80%",
          height: "75vh",
          margin: "30px auto",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {selectedComponent === "ContentHeader" && (
          <AnimatedComponent>
            <ContentHeader onClickHandler={() => {}} />
          </AnimatedComponent>
        )}
        {selectedComponent === "ContentButton" && (
          <AnimatedComponent>
            <ContentButton onClickHandler={() => {}} />
          </AnimatedComponent>
        )}
        {selectedComponent === "ContentImage" && (
          <AnimatedComponent>
            <ContentImage onClickHandler={() => {}} />
          </AnimatedComponent>
        )}
        {selectedComponent === "ContentText" && (
          <AnimatedComponent>
            <ContentText onClickHandler={() => {}} />
          </AnimatedComponent>
        )}
      </div>
    </div>
  );
};

export default AnimationPage;


