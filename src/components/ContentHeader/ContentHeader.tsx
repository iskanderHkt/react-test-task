interface ContentTextProps {
  onClickHandler: (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => void;
}

const ContentHeader: React.FC<ContentTextProps> = ({ onClickHandler }) => {
  return (
    <div style={{padding: '5px', cursor: 'pointer'}}>
      <h1
        onClick={onClickHandler}
        id="ContentHeader"
        style={{ marginBottom: "20px" }}
      >
        Animation Settings
      </h1>
    </div>
  );
};

export default ContentHeader;
