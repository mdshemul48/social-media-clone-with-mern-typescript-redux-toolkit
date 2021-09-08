import React from 'react';
import { useSelector } from 'react-redux';
import { stateInterface } from '../../../types/stateInterface';

import SideBarRow from './SideBarRow';

const LeftSide = () => {
  const { user } = useSelector((state: stateInterface) => state.userState);
  const { firstName, lastName, profileImage } = user!;
  return (
    <div>
      <SideBarRow
        imagePath={
          process.env.REACT_APP_BACKEND_API_LINK + '/public/' + profileImage
        }
        text={`${firstName} ${lastName}`}
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
