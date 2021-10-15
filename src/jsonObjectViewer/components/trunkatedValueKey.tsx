import { trunkatedValue } from "../styles";

const TrunkatedValueKey = ({ objectKey }) => {
  return <div style={trunkatedValue}>{`${objectKey}: {...}`}</div>;
};

export default TrunkatedValueKey;
