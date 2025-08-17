import { createFileRoute } from "@tanstack/react-router";
import AddButton from "../../components/buttons/AddButton";
import { Box, Typography } from "@mui/material";
import DeleteButton from "../../components/buttons/DeleteButton";
import TextInput from "../../components/text-input/TextInput";
import CustomButton from "../../components/buttons/button";
import RoundedButton from "../../components/buttons/RoudedButton";



const ShowUI = () => {
  return (
    <div>
      <h1>ShowUI</h1>
         <Typography variant="h6">Show buttons</Typography>
      <Box gap={2} display="flex" padding={4} >
          <Box gap={2} display="flex" flexDirection="column" width={100}>
                    <DeleteButton onclick={() => console.log("Delete button clicked")} />
        <CustomButton
          onclick={() => console.log("Custom button clicked")}
          label="Custom"
        />
        <AddButton onclick={() => console.log("Add button clicked")} />
          </Box>

            <Box gap={2} display="flex" flexDirection="column" width={200}>
                    <DeleteButton onclick={() => console.log("Delete button clicked")} />
        <CustomButton
          onclick={() => console.log("Custom button clicked")}
          label="Custom"
        />
        <AddButton onclick={() => console.log("Add button clicked")} />
          </Box>
      <Box gap={2} display="flex" flexDirection="column" width={400}>
                    <DeleteButton onclick={() => console.log("Delete button clicked")} />
        <CustomButton
          onclick={() => console.log("Custom button clicked")}
          label="Custom"
        />
        <AddButton onclick={() => console.log("Add button clicked")} />
          </Box>


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

                   <Box width={500} marginBottom={2}>
                             <Box width={500} marginBottom={2}><RoundedButton /></Box>
                   </Box>


</Box>
    </div>
  )
}

export default ShowUI;

export const Route = createFileRoute('/show-ui/ShowUI')({
  component: ShowUI,
})