import ReadMoreIcon from "@mui/icons-material/ReadMore";
import { IconButton, Tooltip, Typography } from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";
import styles from "../../OrderManagement.module.scss";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,

    fontSize: "15px",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const successNotify = () => toast.success("Successfully status changed !");
const errorNotify = () => toast.error("Something went wrong !");

const SingleReturn = ({ activeOrder }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [check, setCheck] = useState(false);
  const [check2, setCheck2] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <StyledTableRow>
        <StyledTableCell component="th" scope="row" className={styles.tdStyle}>
          <Typography variant="subtitle1" paddingLeft={2} fontWeight={"bold"}>
            #{activeOrder?.id}
          </Typography>
        </StyledTableCell>
        <StyledTableCell component="th" scope="row" className={styles.tdStyle}>
          {" "}
          <Typography variant="subtitle1" fontWeight={"bold"}>
            {activeOrder?.order_date?.split("T")[0]}
          </Typography>
        </StyledTableCell>
        <StyledTableCell component="th" scope="row" className={styles.tdStyle}>
          {activeOrder?.user?.email}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row" className={styles.tdStyle}>
          {activeOrder?.phone}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row" className={styles.tdStyle}>
          {activeOrder?.address}
        </StyledTableCell>
        <StyledTableCell component="th" scope="row" className={styles.tdStyle}>
          <span
            style={{
              fontWeight: "bold",
              fontSize: "16px",
              color: "#c79d01",
            }}
          >
            Return
          </span>
        </StyledTableCell>
        <StyledTableCell component="th" scope="row" className={styles.tdStyle}>
          <span style={{ fontSize: "15px", fontWeight: "bold" }}>
            {activeOrder?.total_price}
          </span>
        </StyledTableCell>
        <StyledTableCell component="th" scope="row" className={styles.tdStyle}>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Tooltip title="Details">
              <NavLink
                to={`/dashboard/portal_admin/order_summary/${activeOrder?.id}`}
              >
                <IconButton aria-label="Details" size="large">
                  <ReadMoreIcon
                    fontSize="inherit"
                    style={{ color: "#007FFF" }}
                  />
                </IconButton>
              </NavLink>
            </Tooltip>
          </div>
        </StyledTableCell>
      </StyledTableRow>
    </>
  );
};

export default SingleReturn;
