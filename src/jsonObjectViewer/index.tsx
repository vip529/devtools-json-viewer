import { useState } from "react";
import PrimitiveValueKey from "./components/primitiveValueKey";
import TrunkatedValueKey from "./components/trunkatedValueKey";
import { isObject, getFilteredSet, isKeyInSet } from "./utils";
import ExpandCollapseButton from "./components/expandCollapseButton";
import { jsonRoot, trunkatedParent, jsonEntry } from "./styles";

const JSONViewer = ({ data }) => {
  const [activeItems, setActiveItem] = useState(new Set());

  const handleClick = (keyId) => {
    // keyId is level.level.level....
    let updatedActiveItems = new Set(activeItems);
    if (isKeyInSet(keyId, updatedActiveItems)) {
      updatedActiveItems = getFilteredSet(keyId, updatedActiveItems);
    } else {
      updatedActiveItems.add(keyId);
    }
    console.log(updatedActiveItems);
    setActiveItem(updatedActiveItems);
  };

  const renderEntry = (key, parentObject, keyId) => {
    if (isObject(parentObject[key])) {
      const keysList = Object.keys(parentObject[key]);
      const uniqueKeyId = keyId;
      return (
        <div style={trunkatedParent}>
          <ExpandCollapseButton
            isActive={isKeyInSet(uniqueKeyId, activeItems)}
            handleClick={handleClick}
            keyId={uniqueKeyId}
          />
          {!isKeyInSet(uniqueKeyId, activeItems) ? (
            <div>
              <TrunkatedValueKey objectKey={key} />
            </div>
          ) : (
            <div style={jsonRoot}>
              <div>{`${key}: {`}</div>
              {keysList.map((value, index) => {
                return (
                  <div style={jsonEntry} key={`${value} ${index}`}>
                    {renderEntry(value, parentObject[key], `${keyId}.${index}`)}
                  </div>
                );
              })}
              <div>{`}`}</div>
            </div>
          )}
        </div>
      );
    } else {
      return <PrimitiveValueKey objectKey={key} value={parentObject[key]} />;
    }
  };
  const renderJSONObject = (dataObject) => {
    const keysList = Object.keys(dataObject);
    if (keysList.length === 0) return <div>{`{}`}</div>;

    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>{`{`}</div>
        {keysList.map((value, index) => {
          return (
            <div style={jsonEntry} key={`${value} ${index}`}>
              {renderEntry(value, dataObject, `${index}`)}
            </div>
          );
        })}
        <div>{`}`}</div>
      </div>
    );
  };

  return <div>{renderJSONObject(data)}</div>;
};

export default JSONViewer;
