import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { createMuiTheme, MuiThemeProvider, makeStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import ExposureNeg1 from '@material-ui/icons/ExposureNeg1';

import DataTable from './DataTable';

const theme = createMuiTheme({
  palette: {
    primary: red
  }
});

const useStyles = makeStyles(theme => ({
  tool: {
    display: 'flex',
    justifyContent: 'space-between'
  }
}));

const Pinga = ({ pingas, users, logoutUser, loggedUser, updatePingas }) => {
  const classes = useStyles();

  const [data, setData] = useState([]);

  useEffect(() => {
    const newData = [];
    const loggedUserNormalized = loggedUser.uid ? loggedUser : loggedUser.user;
    const loggedUserFull = users.find(usr => usr.id === loggedUserNormalized.uid);

    users.forEach(usr => {
      const pingaNode = pingas?.filter?.(pg => {
        return pg.target === usr.id;
      });
      const row = {
        name: usr.name,
        action: loggedUserFull.lvl > usr.lvl,
        pingas: [],
        add: () => {
          let newPinga = pingas ? pingas : [];
          let foundAuthor = false;
          newPinga.forEach(pg => {
            if (pg.author === loggedUserNormalized.uid && pg.target === usr.id) {
              pg.qtd += 1;
              foundAuthor = true;
            }
          });
          if (!foundAuthor)
            newPinga.push({
              author: loggedUserNormalized.uid,
              qtd: 1,
              target: usr.id
            });
          updatePingas(newPinga);
        },
        rm: () => {
          let newPinga = pingas ? pingas : [];
          let foundAuthor = false;
          newPinga.forEach((pg, index) => {
            if (pg.author === loggedUserNormalized.uid && pg.target === usr.id) {
              pg.qtd -= 1;
              foundAuthor = true;
            }
            if (pg.qtd === 0) delete newPinga[index];
          });
          updatePingas(newPinga);
        }
      };
      pingaNode &&
        pingaNode.forEach(({ qtd, author }) => {
          const foundUser = users.find(usrs => usrs.id === author);
          row.pingas.push({
            name: foundUser?.name,
            qtd,
            rm: loggedUserFull.name === foundUser?.name ? <ExposureNeg1 /> : null
          });
        });
      newData.push(row);
    });
    setData(newData);
  }, [pingas, users, loggedUser, updatePingas]);

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
