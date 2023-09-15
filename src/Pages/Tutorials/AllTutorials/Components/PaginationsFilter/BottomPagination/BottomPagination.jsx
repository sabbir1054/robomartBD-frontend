import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import * as React from "react";

const BottomPagination = () => {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <>
      <Stack spacing={2}>
        <Pagination
          color="success"
          count={10}
          page={page}
          onChange={handleChange}
        />
      </Stack>
    </>
  );
};

export default BottomPagination;
