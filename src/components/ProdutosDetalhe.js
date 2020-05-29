import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { CarContext } from "./CarContext";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function ProdutosDetalhe({ nome, valor, cor, imgUrl }) {
  const classes = useStyles();

  const { saveCar, carProducts } = useContext(CarContext);

  const handleAddProductToCar = () => {
    alert(nome + " Adicionado ao carrinho!");
    saveCar(nome);
  };

  return (
    <Grid item xs={4}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={imgUrl} title={nome} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {nome}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {valor}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            onClick={handleAddProductToCar}
            id={nome}
            size="small"
            color="primary"
          >
            Adicionar Carrinho
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default ProdutosDetalhe;
