import { Box } from "@mui/material";


const NavbarContainer = ({children}) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: '60px', padding: '0 20px',backgroundColor: '#0a34ed0e', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
       {children}
    </Box>
  );
};

export default NavbarContainer;
