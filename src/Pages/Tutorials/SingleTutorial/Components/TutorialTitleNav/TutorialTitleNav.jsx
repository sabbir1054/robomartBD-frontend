import { Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import React from "react";
import styles from "../../SingleTutorial.module.scss";
import TagBadge from "./TagBadge";
const TutorialTitleNav = () => {
  return (
    <div style={{ position: "fixed", top: "", width: "100%" }}>
      <ListItem
        style={{
          backgroundColor: "#f2f2f2",
          width: "360px",
          borderRadius: "5px 5px 0 0",
        }}
      >
        <Typography
          variant="h6"
          style={{ fontFamily: "Roboto", fontWeight: "bold" }}
        >
          Sections
        </Typography>
      </ListItem>

      <List
        sx={{
          border: "1px solid #e2e2e2",
          borderRadius: "5px",
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          position: "relative",
          overflow: "auto",
          maxHeight: "70vh",
          "& ul": { padding: 0 },
        }}
      >
        <ListItem
          style={{ borderBottom: "1px solid #e2e2e2" }}
          className={styles.listItemSections}
        >
          <ListItemText primary={`Introduction `} />
        </ListItem>
        <ListItem
          style={{ borderBottom: "1px solid #e2e2e2" }}
          className={styles.listItemSections}
        >
          <ListItemText primary={` Installing Arduino `} />
        </ListItem>
        <ListItem
          style={{ borderBottom: "1px solid #e2e2e2" }}
          className={styles.listItemSections}
        >
          <ListItemText
            primary={`The Project: Displaying Accelerometer Data Over Bluetooth `}
          />
        </ListItem>
        <ListItem
          style={{ borderBottom: "1px solid #e2e2e2" }}
          className={styles.listItemSections}
        >
          <ListItemText
            primary={`The Project: Displaying Accelerometer Data Over Bluetooth `}
          />
        </ListItem>
        <ListItem
          style={{ borderBottom: "1px solid #e2e2e2" }}
          className={styles.listItemSections}
        >
          <ListItemText
            primary={`The Project: Displaying Accelerometer Data Over Bluetooth `}
          />
        </ListItem>
        <ListItem
          style={{ borderBottom: "1px solid #e2e2e2" }}
          className={styles.listItemSections}
        >
          <ListItemText
            primary={`The Project: Displaying Accelerometer Data Over Bluetooth `}
          />
        </ListItem>
        <ListItem
          style={{ borderBottom: "1px solid #e2e2e2" }}
          className={styles.listItemSections}
        >
          <ListItemText
            primary={`The Project: Displaying Accelerometer Data Over Bluetooth `}
          />
        </ListItem>
        <ListItem
          style={{ borderBottom: "1px solid #e2e2e2" }}
          className={styles.listItemSections}
        >
          <ListItemText
            primary={`The Project: Displaying Accelerometer Data Over Bluetooth `}
          />
        </ListItem>
        <ListItem
          style={{ borderBottom: "1px solid #e2e2e2" }}
          className={styles.listItemSections}
        >
          <ListItemText
            primary={`The Project: Displaying Accelerometer Data Over Bluetooth `}
          />
        </ListItem>
        <ListItem
          style={{ borderBottom: "1px solid #e2e2e2" }}
          className={styles.listItemSections}
        >
          <ListItemText
            primary={`The Project: Displaying Accelerometer Data Over Bluetooth `}
          />
        </ListItem>
        <ListItem
          style={{ borderBottom: "1px solid #e2e2e2" }}
          className={styles.listItemSections}
        >
          <ListItemText
            primary={`The Project: Displaying Accelerometer Data Over Bluetooth `}
          />
        </ListItem>
        <ListItem
          style={{ borderBottom: "1px solid #e2e2e2" }}
          className={styles.listItemSections}
        >
          <ListItemText
            primary={`The Project: Displaying Accelerometer Data Over Bluetooth `}
          />
        </ListItem>
        <ListItem
          style={{ borderBottom: "1px solid #e2e2e2" }}
          className={styles.listItemSections}
        >
          <ListItemText
            primary={`The Project: Displaying Accelerometer Data Over Bluetooth `}
          />
        </ListItem>

        {/* Tags */}
        <ListItem style={{ padding: "3vh 0 0 0" }}>
          <div style={{ marginLeft: "10px" }}>
            <Typography
              variant="h6"
              style={{ fontFamily: "Roboto", fontWeight: "bold" }}
            >
              Tags
            </Typography>
          </div>
        </ListItem>
        <div
          style={{
            border: "1px solid #e2e2e2",
            maxWidth: "340px",
            width: "100% !important",
            borderRadius: "5px",
            minHeight: "100px",
            margin: "5px",
            padding: "10px",
          }}
        >
          <TagBadge tag={"Circute"} />
          <TagBadge tag={"Board"} />
          <TagBadge tag={"Motor Driver"} />
        </div>
      </List>
    </div>
  );
};

export default TutorialTitleNav;
