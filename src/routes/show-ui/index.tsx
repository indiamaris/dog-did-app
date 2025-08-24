import { createFileRoute } from "@tanstack/react-router";
import { Box, Typography } from "@mui/material";
import TextInput from "@components/inputs/text-input/TextInput.tsx";
import ShowButtons from "@components/inputs/buttons/ShowButtons.tsx";







const ShowUI = () => {
  return (
    <div>
      <h1>ShowUI</h1>

      <Box gap={2} display="flex" padding={4} flexDirection="column" >
           <Typography variant="h6">Buttons</Typography>
        <ShowButtons />
      </Box>

      <Box padding={4} display="flex" flexDirection="column" gap={2}>
  <Box width={300} marginBottom={2}>
          <TextInput
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            value={12}
            onChange={(e) => console.log(e.target.value)}
            
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



</Box>
    </div>
  )
}

export default ShowUI;

export const Route = createFileRoute('/show-ui/')({
  component: ShowUI,
})