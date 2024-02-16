import { useDispatch } from "react-redux";
import { setSelectedComponent } from "../features/selectedComponentSlice";
import ContentButton from "../components/ContentButton/ContentButton";
import ContentHeader from "../components/ContentHeader/ContentHeader";
import ContentImage from "../components/ContentImage/ContentImage";
import ContentText from "../components/ContentText/ContentText";
import PageHeader from "../components/PageHeader/PageHeader";
import PageSidebar from "../components/PageSidebar/PageSidebar";





const HomePage = () => {
    const dispatch = useDispatch();

    const handleComponentClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        const target = event.currentTarget as HTMLParagraphElement;
        const componentType = target.id;
      
        const selectedElements = document.querySelectorAll(".selected");
        selectedElements.forEach((element) => {
          element.classList.remove("selected");
        });
      
        target.classList.add("selected");
        console.log(event);
      
        dispatch(setSelectedComponent(componentType));
      };
  
    return (
      <div
        style={{
          maxWidth: "1234px",
          margin: "0 auto",
          backgroundColor: "#E7EBE0",
        }}
      >
        <PageHeader />
        <main style={{display: 'flex'}}>
          <div
            className="right-content"
            style={{
              width: "874px",
              height: "498px",
              margin: "30px 60px",
              border: "2px solid black",
              backgroundColor: "#fff",
  
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
              padding: "70px",
            }}
          >
            <div style={{ width: "374px" }}>
              <ContentHeader onClickHandler={handleComponentClick} />
              <ContentText onClickHandler={handleComponentClick} />
              <ContentButton onClickHandler={handleComponentClick} />
            </div>
  
            <div>
              <ContentImage onClickHandler={handleComponentClick} />
            </div>
          </div>
        <PageSidebar />
        </main>
      </div>
    );
  }

export default HomePage;
