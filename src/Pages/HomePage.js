import { React, useEffect } from "react";

import { getDataFromAPI } from "../Data/FakeStoreApi";
import ItemCard from "../Components/ItemCard";

import { Container, Typography, Grid } from "../lib/lib";

function HomePage({ itemsData, setItemsData, isSearching, deleteItem }) {
  useEffect(() => {
    getDataFromAPI().then((data) => setItemsData(data));
  }, []);

  return (
    <Container maxWidth="lg" sx={{ marginTop: "80px" }}>
      <Typography variant="h4" component="h1" marginY={4} color={"#0F4C75"}>
        All Categories
      </Typography>
      {itemsData.length ? (
        <Grid container spacing={2}>
          {itemsData.map((item) => (
            <Grid key={item.id} item xs={12} sm={4} md={3}>
              <ItemCard itemData={item} deleteItem={deleteItem} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography
          variant="h4"
          component="h1"
          sx={{ color: "#0F4C75", display: "flex", justifyContent: "center" }}
        >
          {isSearching ? "No Results Found" : "Loading..."}
        </Typography>
      )}
    </Container>
  );
}

export default HomePage;
