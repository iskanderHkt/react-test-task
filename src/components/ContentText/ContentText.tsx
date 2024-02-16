interface ContentTextProps {
  onClickHandler: (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => void;
}

const ContentText: React.FC<ContentTextProps> = ({ onClickHandler }) => {
  return (
    <div style={{padding: '5px', cursor: 'pointer'}}>
      <p
        id="ContentText"
        onClick={onClickHandler}
        style={{
          wordWrap: "break-word",
          marginBottom: "20px",
          paddingRight: "20px",
          maxWidth: '350px'
        }}
      >
        The user should have the option to select any element on the page and
        set up its animation using the controls in the right panel. A dotted
        line will show the element's position and state before the animation
        begins, giving the user a clear idea of how the animation will appear.
        The preview button on the top panel will open the result in a new tab.
      </p>
    </div>
  );
};

export default ContentText;
