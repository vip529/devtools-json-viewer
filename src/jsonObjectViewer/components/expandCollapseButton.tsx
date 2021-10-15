import { expandCollapseButton } from "../styles";
const ExpandCollapseButton = ({ isActive = false, handleClick, keyId }) => {
  return (
    <button style={expandCollapseButton} onClick={() => handleClick(keyId)}>
      {isActive ? <>{`-`}</> : <>{`+`}</>}
    </button>
  );
};

export default ExpandCollapseButton;
