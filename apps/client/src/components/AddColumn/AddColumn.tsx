import {Button} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AddColumn = () => {
  return (
    <>
      <Button
        variant="outlined"
        disableElevation
        size="large"
        fullWidth
        sx={{
          color: "#232323",
          borderStyle: 'dashed'
        }}
        startIcon={ <AddIcon/>}
      >
        Add new column
      </Button>
    </>
  );
};

export default AddColumn;