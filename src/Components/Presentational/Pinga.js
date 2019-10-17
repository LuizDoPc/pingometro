import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { createMuiTheme, MuiThemeProvider, makeStyles } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

import DataTable from "./DataTable";

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

const Pinga = ({ pingas, users, logoutUser }) => {
  const classes = useStyles();

  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = [];
    users.forEach(usr => {
      const pingaNode =
        pingas.filter &&
        pingas.filter(pg => {
          return pg.target === usr.id;
        });
      const row = {
        name: usr.name,
        pingas: []
      };
      pingaNode &&
        pingaNode.forEach(({ qtd, author }) => {
          const foundUser = users.find(usrs => usrs.id === author);
          row.pingas.push({ name: foundUser && foundUser.name, qtd });
        });
      newData.push(row);
    });
    setData(newData);
  }, [pingas, users]);

  return (
    <MuiThemeProvider theme={theme}>
      <React.Fragment>
        <AppBar position="static">
          <Toolbar className={classes.tool}>
            <Typography type="title" color="inherit">
              Pingômetro
            </Typography>
            <Button color="inherit" onClick={logoutUser}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
        <DataTable data={data} />
      </React.Fragment>
    </MuiThemeProvider>
  );
};

export default Pinga;
