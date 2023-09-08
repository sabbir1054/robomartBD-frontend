import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Paper,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SingleListItem = ({ category }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setOpen(!open);
  };
  const handleSubCategory = (name) => {
    navigate(name);
  };
  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={category?.name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Divider />
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          component={Paper}
          elevation={3}
          style={{
            position: "absolute",
            left: "90%",
            zIndex: 10,
            width: "250px",
          }}
        >
          {category?.sub_category?.length > 0 ? (
            category?.sub_category?.map((singleSub) => (
              <>
                <ListItemButton
                  onClick={() =>
                    handleSubCategory(
                      `/products/categories/${
                        singleSub?.id
                      }/${singleSub?.name?.replace(/ /g, "_")}`
                    )
                  }
                >
                  <ListItemText primary={singleSub?.name} />
                </ListItemButton>
                <Divider />
              </>
            ))
          ) : (
            <>
              <Divider />
            </>
          )}
          <Link
            to={`/products/categories/${category?.id}/${category?.name.replace(
              / /g,
              "_"
            )}`}
          >
            {" "}
            <ListItemText
              primary={"Show All"}
              style={{ textAlign: "center" }}
            />
          </Link>
        </List>
      </Collapse>
    </>
  );
};

export default SingleListItem;
