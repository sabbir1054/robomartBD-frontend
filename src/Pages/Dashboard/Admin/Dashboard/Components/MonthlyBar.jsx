import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
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
import { backendUrl } from "../../../../../utils/backendApiUrlProvider";

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
    month: "January",
    sell: 4000,
    profit: 215,
  },
  {
    month: "February",
    sell: 3000,
    profit: 215,
  },
  {
    month: "March",
    sell: 2000,
    profit: 215,
  },
  {
    month: "April",
    sell: 2780,
    profit: 215,
  },
  {
    month: "May",
    sell: 7000,
    profit: 215,
  },
  {
    month: "June",
    sell: 2390,
    profit: 215,
  },
  {
    month: "July",
    sell: 3490,
    profit: 215,
  },
  {
    month: "August",
    sell: 2390,
    profit: 215,
  },
  {
    month: "September",
    sell: 2390,
    profit: 215,
  },
  {
    month: "October",
    sell: 2780,
    profit: 215,
  },
  {
    month: "November",
    sell: 5744,
    profit: 215,
  },
  {
    month: "December",
    sell: 4965,
    profit: 215,
  },
];

const MonthlyBar = () => {
  const [yearlyData, setYearlyData] = useState({});
  const [year, setYear] = useState("2023");

  const handleChange = (event) => {
    setYear(event.target.value);
  };

  useEffect(() => {
    const data = { year: year };
    const storedData = localStorage.getItem("user");
    const userDataStorage = JSON.parse(storedData);
    fetch(`${backendUrl}/order_management/get_dashbord_yearly`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `JWT ${userDataStorage}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => setYearlyData(data));
  }, [year]);

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
        <InputLabel id="demo-simple-select-autowidth-label">
          Select Year
        </InputLabel>
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
          data={yearlyData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sell" fill="#8884d8" barSize={50} />
          <Bar dataKey="profit" fill="#82ca9d" barSize={50} />
        </BarChart>
      </div>
    </div>
  );
};

export default MonthlyBar;
