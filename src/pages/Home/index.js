//import Sidebar from "../../components/Sidebar";
import React from "react";
import Header from "../../components/Header";
import Categorias from "../../components/Categorias";
import Produtos from "../../components/Produtos";
import Grid from "@material-ui/core/Grid";
import FilterCategory from "../../state/filterCategory/Provider";
import Products from "../../state/product/Provider";

export default class HomePage extends React.Component {
  render() {
    return (
      <>
        <FilterCategory>
          <Products>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Header />
              </Grid>
              <Grid item xs={3}>
                <Categorias />
              </Grid>
              <Grid item xs={9}>
                <Produtos />
              </Grid>
            </Grid>
          </Products>
        </FilterCategory>
      </>
    );
  }
}
