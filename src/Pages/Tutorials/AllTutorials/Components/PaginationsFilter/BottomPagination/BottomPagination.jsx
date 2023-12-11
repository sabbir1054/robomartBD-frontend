import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import * as React from "react";

const BottomPagination = ({ handlePageChange, totalPages, }) => {

  return (
    <>
      <Stack spacing={2}>
        <Pagination
          color="success"
          count={totalPages}
          onChange={handlePageChange}
        />
      </Stack>
    </>
  );
};

export default BottomPagination;
