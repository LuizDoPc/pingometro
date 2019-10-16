import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { createMuiTheme, MuiThemeProvider, makeStyles } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

const theme = createMuiTheme({
  palette: {
    primary: red
  }
});

const useStyles = makeStyles(theme => ({
  tool: {
    display: "flex",
    justifyContent: "space-between"
  }
}));

const Pinga = props => {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <React.Fragment>
        <AppBar position="static">
          <Toolbar className={classes.tool}>
            <Typography type="title" color="inherit">
              Pingômetro
            </Typography>
            <Button color="inherit" onClick={props.logoutUser}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </React.Fragment>
    </MuiThemeProvider>
  );
};

export default Pinga;
