import React from 'react';

// left sidebar component
const SideBarRow: React.FC<{ imagePath: string; text: string }> = (props) => {
  const { imagePath, text } = props;
  return (
    <div className="d-flex align-items-center my-2">
      <div>
        <img
          width="35px"
          height="35px"
          className="rounded-circle"
          src={imagePath}
          alt="sidebar"
        />
      </div>
      <div className="ms-2">
        <span className="fs-6 sidebar-text">{text}</span>
      </div>
    </div>
  );
};

export default SideBarRow;
