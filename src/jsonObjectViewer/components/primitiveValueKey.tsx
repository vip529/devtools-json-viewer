import { primitiveValueContainer } from "../styles";

const PrimitiveValueKey = ({ objectKey, value }) => {
  return <div style={primitiveValueContainer}>{`${objectKey}: ${value}`}</div>;
};

export default PrimitiveValueKey;
