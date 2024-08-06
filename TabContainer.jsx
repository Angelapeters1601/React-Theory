import React, { useState } from "react";
import NoComponent from "./src/NoComponent";
import TabButton from "./src/TabButton";
import TabInfo from "./src/TabInfo";
import { theories } from "./src/theories";

function TabContainer() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="tab-container">
      <div className="tab-bar">
        {theories.map((_, index) => (
          <TabButton
            key={index}
            num={index}
            activeTab={activeTab}
            onClick={setActiveTab}
          />
        ))}
      </div>

      {activeTab >= theories.length ? (
        <NoComponent />
      ) : (
        <TabInfo
          theory={theories[activeTab]}
          key={theories[activeTab].summary}
        />
      )}
    </div>
  );
}

export default TabContainer;
