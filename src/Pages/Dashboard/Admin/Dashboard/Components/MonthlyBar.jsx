import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { useState } from "react";


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const yearsArray = [
  2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035,
  2036, 2037, 2038, 2039, 2040, 2041, 2042, 2043, 2044, 2045, 2046, 2047, 2048,
  2049, 2050,
];

const data = [
  {
    name: "January",
    uv: 4000,
  },
  {
    name: "February",
    uv: 3000,
  },
  {
    name: "March",
    uv: 2000,
  },
  {
    name: "April",
    uv: 2780,
  },
  {
    name: "May",
    uv: 7000,
  },
  {
    name: "June",
    uv: 2390,
  },
  {
    name: "July",
    uv: 3490,
  },
  {
    name: "August",
    uv: 2390,
  },
  {
    name: "September",
    uv: 2390,
  },
  {
    name: "October",
    uv: 2780,
  },
  {
    name: "November",
    uv: 5744,
  },
  {
    name: "December",
    uv: 4965,
  },
];

const MonthlyBar = () => {
  const [year, setYear] = useState("");

  const handleChange = (event) => {
    setYear(event.target.value);
  };
  console.log(year);
  return (
    <div>
      <Typography
        variant="h5"
        style={{
          fontFamily: "Poppins",
        
          marginTop: "7vh",
          fontWeight: "bold",
        }}
      >
        {" "}
        Monthly Sell <small>(select year)</small>
      </Typography>
      {/* date picker */}
      <FormControl sx={{ m: 1, width: 150 }} size="small">
        <InputLabel id="demo-simple-select-autowidth-label">Select Year</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={year}
          MenuProps={MenuProps}
          onChange={handleChange}
          autoWidth
          label="Year"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {yearsArray?.map((year) => (
            <MenuItem
              value={year}
              style={{ borderBottom: "1px solid #e2e2e2" }}
            >
              {year}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <div>
        <BarChart
          width={1100}
          height={600}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* <Bar dataKey="pv" fill="#8884d8" /> */}
          <Bar dataKey="uv" fill="#82ca9d" barSize={50} />
        </BarChart>
      </div>
    </div>
  );
};

export default MonthlyBar;
