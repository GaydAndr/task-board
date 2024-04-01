import {useState} from "react";
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";

const CardPriority = ({name}: { name: string }) => {
  const [priority, setPriority] = useState('high');

  const handleChange = (event: SelectChangeEvent) => {
    setPriority(event.target.value);
  };
  return (
    <FormControl sx={{m: 1, minWidth: 120}} size="small">
      <InputLabel id="demo-select-small-label">Age</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={priority}
        label="Priority"
        onChange={handleChange}
        name={name}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value="low">Low</MenuItem>
        <MenuItem value="medium">Medium</MenuItem>
        <MenuItem value="high">High</MenuItem>
      </Select>
    </FormControl>
  );
};

export default CardPriority;