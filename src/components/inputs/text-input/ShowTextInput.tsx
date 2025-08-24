import { Box } from "@mui/material";
import TextInput from "./TextInput";

const ShowTextInput = () => {
  return (    
  <Box padding={1} display="flex" flexDirection="row" gap={2} flexWrap="wrap">
  <Box width={100} marginBottom={2}>
          <TextInput
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={12}
            onChange={(e) => console.log(e.target.value)}
            
          /></Box>

           <Box width={300} marginBottom={2}>
          <TextInput
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={12}
            onChange={(e) => console.log(e.target.value)}
            width="100%"
            
          /></Box>

            <Box width={500} marginBottom={2}>
          <TextInput
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={12}
            onChange={(e) => console.log(e.target.value)}
            width="100%"
            
          /></Box>



</Box>);
}

export default ShowTextInput;
