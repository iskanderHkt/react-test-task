import { useSelector } from "react-redux";
import logo from "../../img/logo stroke.svg";
import { RootState } from "../../store";
import { Link } from "react-router-dom";
// import { useState } from "react";

const PageHeader = () => {
  const selectedComponent = useSelector(
    (state: RootState) => state.selectedComponent.selectedComponent
  );

  // const [enableNavigate, setEnableNavigate] = useState(false)

  return (
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
      <img src={logo} alt="logo" />
      <Link to={"/animation"}>
        <button
          onClick={() => console.log(selectedComponent)}
          style={{
            width: "87px",
            height: "34px",
            borderRadius: "5px",
            backgroundColor: "#3E87F8",
            color: "#FFF",
            cursor: "pointer"
          }}
        >Preview</button>
      </Link>
    </header>
  );
};

export default PageHeader;
