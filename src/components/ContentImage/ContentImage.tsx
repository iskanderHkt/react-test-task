import rectangle from "../../img/Rectangle.svg";

interface ContentTextProps {
  onClickHandler: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void;
}


const ContentImage: React.FC<ContentTextProps> = ({onClickHandler}) => {
  return (
    <div style={{padding: '5px', cursor: 'pointer'}}>
      <img style={{cursor: 'pointer'}} id="ContentImage" onClick={onClickHandler} src={rectangle} alt="" />
    </div>
  );
};

export default ContentImage;
