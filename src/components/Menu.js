import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useHistory } from "react-router-dom";
import StoreContext from "../components/Store/Context"; //"../../components/Store/Context";
import SimpleModal from "./ModalCar";
import { useUser } from "../contexts/User";

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

export default function Menu({ nomeApp }) {
  const { setToken } = useContext(StoreContext);
  const { user } = useUser();

  function login() {
    return { token: null };
  }

  const classes = useStyles();

  function logout() {
    const { token } = login();
    setToken(token);
    return history.push("/");
  }
  const history = useHistory();
  //console.log(nomeApp)

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {nomeApp}
          </Typography>
          <SimpleModal />
          <Button color="inherit" onClick={logout}>
            Logout ({user})
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
