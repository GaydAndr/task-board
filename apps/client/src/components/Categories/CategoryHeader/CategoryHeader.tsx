import {Stack, Typography} from "@mui/material";
import CategoryMenu from "../CategoryMenu/CategoryMenu.tsx";

interface Prop {
  name: string
  amount: number
  id: string
}

const CategoryHeader = ({id, name, amount}: Prop) => {
  return (
    <Stack
      direction={"row"}
      spacing={2}
      border={2}
      borderColor={"lightgrey"}
      borderLeft={0}
      borderRight={0}
      alignItems={"center"}
    >
      <Typography variant="h5" flexGrow={1} textAlign={"left"}>
        {name}
      </Typography>
      <Typography variant="h5">
        {amount}
      </Typography>
      <CategoryMenu id={id}/>
    </Stack>
  );
};

export default CategoryHeader;