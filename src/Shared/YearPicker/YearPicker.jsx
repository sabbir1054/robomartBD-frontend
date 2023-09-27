import React from "react";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const YearPicker = ({ selectedDate, handleDateChange }) => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        views={["year"]} // Only allow selection of the year
        label="Select Year"
        value={selectedDate}
        onChange={handleDateChange}
        inputVariant="outlined"
        format="yyyy"
        minDate={new Date("1900-01-01")} // Set a minimum date if needed
        maxDate={new Date()} // Set a maximum date if needed (e.g., current year)
      />
    </MuiPickersUtilsProvider>
  );
};

export default YearPicker;
