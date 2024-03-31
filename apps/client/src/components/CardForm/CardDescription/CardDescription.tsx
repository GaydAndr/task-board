import {TextField} from "@mui/material";

const CardDescription = () => {
  return (
    <TextField
      id="outlined-multiline-static"
      label="Description"
      multiline
      rows={4}
      defaultValue="Default Value"
    />
  );
};

export default CardDescription;