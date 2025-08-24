import { Box } from "@mui/material";
import ButtonCustom from "./ButtonCustom";

const ShowButtons = () => { return (
    <Box gap={4} display="flex" flexDirection="row">
        <Box gap={2} display="flex" flexDirection="column" width={100}>
        <ButtonCustom
            onclick={() => console.log("Delete sm button clicked")}
            variant="delete"
            />

        <ButtonCustom
            onclick={() => console.log("Add sm button clicked")}  
            variant="add"
        />

          <ButtonCustom
            onclick={() => console.log("Basic button clicked")}  
            label={"Basic"}
        />

      

      </Box>
        <Box gap={2} display="flex" flexDirection="column" width={200}>
            <ButtonCustom
                onclick={() => console.log("Delete sm button clicked")}
                variant="delete"
            />

        <ButtonCustom
            onclick={() => console.log("Add sm button clicked")}  
            variant="add"
        />

          <ButtonCustom
            onclick={() => console.log("Basic button clicked")}  
            label={"Basic"}

        />


      </Box>

      <Box gap={2} display="flex" flexDirection="column" width={400}>
            <ButtonCustom
                onclick={() => console.log("Delete sm button clicked")}
                variant="delete"
            />

        <ButtonCustom
            onclick={() => console.log("Add sm button clicked")}  
            variant="add"
        />

          <ButtonCustom
            onclick={() => console.log("Basic button clicked")}  
            label={"Basic"}

        />


      </Box>

    </Box>
);
}

export default ShowButtons;