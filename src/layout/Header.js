import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));
export default function ButtonAppBar() {
  const classes = useStyles();

  const style = {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleFacultyLogin = () => {
    setAnchorEl(null);
  };
  const handleStudentLogin = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={style}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Faculty Finder App
          </Typography>
          <Button color="inherit">
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Sign Up
            </Link>
          </Button>
          <div>
            <Button color="inherit" onClick={handleMenu}>
              Sign In
            </Button>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <Link
                to="/facsignin"
                style={{ textDecoration: "none", color: "ButtonText" }}
              >
                <MenuItem onClick={handleFacultyLogin}>Faculty LogIn</MenuItem>
              </Link>
              <Link
                to="/studsignin"
                style={{ textDecoration: "none", color: "ButtonText" }}
              >
                <MenuItem onClick={handleStudentLogin}>Student LogIn</MenuItem>
              </Link>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}