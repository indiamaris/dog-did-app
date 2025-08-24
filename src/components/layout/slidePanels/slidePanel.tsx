import Drawer from '@mui/material/Drawer';

export const SlidePanel = ({ open, toggleDrawer, children }) => {
  return (
    <Drawer open={open} onClose={toggleDrawer(false)}>
  {children }
</Drawer>
  );
};
import { createFileRoute } from '@tanstack/react-router';