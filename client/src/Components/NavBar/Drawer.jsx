import Drawer from '@mui/material/Drawer';
import { DrawerContent } from './DrawerContent';
import { useState } from 'react';

export function TemporaryDrawer({ isOpen, toggleDrawer }) {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  // const toggleDrawer = (anchor, open) => (event) => {
  //   if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
  //     return;
  //   }
  //   console.log('entro')
  //   setState({ ...state, [anchor]: !open });
  // };

  return (
    <Drawer
        anchor='left'
        open={isOpen}
        onClose={toggleDrawer}

    >
        <DrawerContent toggleDrawer={toggleDrawer}/>    
    </Drawer>
  );
}