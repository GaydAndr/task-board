import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DatePicker, LocalizationProvider} from "@mui/x-date-pickers";
import {useState} from "react";
import dayjs, {Dayjs} from "dayjs";

const CardDatePicker = () => {
  const [value, setValue] = useState<null | Dayjs>(dayjs('2022-04-17'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Controlled picker"
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
    </LocalizationProvider>
  );
};

export default CardDatePicker;