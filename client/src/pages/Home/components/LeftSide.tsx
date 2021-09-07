import React from 'react';
import SideBarRow from './SideBarRow';
const LeftSide = () => {
  return (
    <div>
      <SideBarRow
        imagePath={
          'http://localhost:5000/public/fdc49ddc-7d1c-4061-a4b1-3d55ed10b29d.jpeg'
        }
        text="MD. Shimul"
      />
      <SideBarRow
        imagePath={
          'https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/S0U5ECzYUSu.png'
        }
        text="Friends"
      />
      <SideBarRow
        imagePath={
          'https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png'
        }
        text="Groups"
      />
      <SideBarRow
        imagePath={
          'https://static.xx.fbcdn.net/rsrc.php/v3/yH/r/kyCAf2jbZvF.png'
        }
        text="Pages"
      />
      <SideBarRow
        imagePath={
          'https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png'
        }
        text="Marketplace"
      />
      <SideBarRow
        imagePath={
          'https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png'
        }
        text="Watch"
      />
    </div>
  );
};

export default LeftSide;
