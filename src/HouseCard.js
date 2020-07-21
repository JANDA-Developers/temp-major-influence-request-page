import React from "react";

const Tag = ({ name }) => {
  return (
    <div className="keyword">
      {name}
      <div>안녕?</div>
    </div>
  );
};

export const HouseCard = ({ housename }) => {
  return (
    <div className="houseCard">
      {housename}
      <Tag name="무선인터넷" />
      <Tag name="무선인터넷2" />
    </div>
  );
};
