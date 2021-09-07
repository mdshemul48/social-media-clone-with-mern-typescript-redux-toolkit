import React from 'react';

const sideBarRow: React.FC<{ imagePath: string; text: string }> = (props) => {
  const { imagePath, text } = props;
  return (
    <div className="d-flex align-items-center">
      <div className="">
        <img src={imagePath} alt="sidebar" />
      </div>
      <div>{text}</div>
    </div>
  );
};

export default sideBarRow;
