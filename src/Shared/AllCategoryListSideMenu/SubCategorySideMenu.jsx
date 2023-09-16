import { List, ListItem, ListItemButton } from '@mui/material';
import React from 'react';
import styles from "./CategorySideMenu.module.scss"
import { useNavigate } from 'react-router-dom';
const SubCategorySideMenu = ({ items }) => {
    const navigate = useNavigate();

    const navigateToSubcategory = (path) => {
        navigate(`/${path}`);
    }

     return (
       <List
         sx={{
           width: "100%",
           position: "absolute",
           top: 0,
           left: "100%",
           display: "none",
         }}
         className={styles.sub_menu}
       >
         {items?.map((item, index) => (
           <ListItemButton key={index} className={styles.sub_menu_item}>
             {item?.name}
           </ListItemButton>
         ))}
       </List>
     );
};

export default SubCategorySideMenu;