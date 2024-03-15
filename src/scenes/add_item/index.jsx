import { Box, Button} from "@mui/material";
import Header from "../../components/Header";

const Add_Item = () => {

  return (
    <Box m="20px">
      <Header title="ADD ITEM" subtitle="Add a new item" />

            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Add Item
              </Button>
            </Box>
          
        
    </Box>
  );
};


export default Add_Item;
