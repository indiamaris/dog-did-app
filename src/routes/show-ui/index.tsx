import { createFileRoute } from "@tanstack/react-router";
import { Box, Typography } from "@mui/material";
import TextInput from "@components/inputs/text-input/TextInput.tsx";
import ShowButtons from "@components/inputs/buttons/ShowButtons.tsx";
import ShowTextInput from "../../components/inputs/text-input/ShowTextInput";







const ShowUI = () => {
  return (
    <Box gap={4} padding={4} display="flex" flexDirection="column">
      <h1>ShowUI</h1>

   
           <Typography variant="h6">Buttons</Typography>
        <ShowButtons />

      <Typography variant="h6">Text Inputs</Typography>
      <ShowTextInput />
    </Box>
  )
}

export default ShowUI;

export const Route = createFileRoute('/show-ui/')({
  component: ShowUI,
})