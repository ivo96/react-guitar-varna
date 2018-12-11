/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Assignment, Book, Help } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="За Нас"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Help}
          dropdownList={[
            <Link to="/history" className={classes.dropdownLink}>
              История
            </Link>,
            <Link to="/news" className={classes.dropdownLink}>
              Новини
            </Link>,
            <Link to="/notes" className={classes.dropdownLink}>
              Ноти
            </Link>,
            <Link to="/friends" className={classes.dropdownLink}>
              Приятели
            </Link>,
          ]}
        />
      </ListItem>


      <ListItem className={classes.listItem}>
        <Link to='/projects' className={classes.navLink}>
          Проекти
        </Link>
      </ListItem>
     
      <ListItem className={classes.listItem}>
        <Link to='/teachers' className={classes.navLink}>
          Преподаватели
        </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Link to='/contacts' className={classes.navLink}>
          Контакти
        </Link>
      </ListItem>

      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Последвайте ни във Facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/GuitarVarna"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
