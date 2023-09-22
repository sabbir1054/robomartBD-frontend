import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import * as React from "react";

const BottomPagination = ({ handlePageChange, totalPages, page }) => {
  

  return (
    <>
      <Stack spacing={2}>
        <Pagination
          color="success"
          count={totalPages}
          page={totalPages}
          onChange={handlePageChange}
        />
      </Stack>
    </>
  );
};

export default BottomPagination;
