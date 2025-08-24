import { Box } from "@mui/material";


const NavbarContainer = ({children}) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: '60px', padding: '0 20px' }}>
       {children}
    </Box>
  );
};

export default NavbarContainer;
