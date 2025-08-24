import { Box } from "@mui/material";
import Header from "../header/Header";
import Footer from "../footer/Footer";
    

const PageShell = ({children,title,footerItens}) => {
  return (
    <Box>
      <Header title={title} />
      {children}
      <Footer footerItens={footerItens} />
    </Box>
  );
};

export default PageShell;
