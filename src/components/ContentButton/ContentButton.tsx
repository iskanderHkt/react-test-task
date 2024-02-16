interface ContentTextProps {
  onClickHandler: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

const ContentButton: React.FC<ContentTextProps> = ({onClickHandler }) => {
  return (
    <div style={{padding: '5px'}}>
      <button
      id="ContentButton"

      onClick={onClickHandler}
        style={{
          cursor: 'pointer',
          width: "146px",
          height: "51px",
          backgroundColor: "#70B2FF",
          fontWeight: "500",
          fontSize: "17px",
          border: 'none',
          color: "#FFFFFF",
        }}
      >
        Button
      </button>
    </div>
  );
};

export default ContentButton;
