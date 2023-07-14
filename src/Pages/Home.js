import { React, useState, useEffect } from "react";
import { Container, Grid, Typography } from "@mui/material";
import ItemCard from "../Components/ItemCard";
import { getDataFromAPI } from "../Data/FakeStoreApi";

function HomePage() {
  const [itemsData, setItemsData] = useState([]);

  useEffect(() => {
    getDataFromAPI().then((data) => setItemsData(data));
  }, []);

  return (
    <Container maxWidth="lg" sx={{ marginTop: "80px" }}>
      <Typography variant="h4" component="h1" marginY={4} color={"#0F4C75"}>
        All Categories
      </Typography>
      {itemsData.length === 0 ? (
        <Typography
          variant="h4"
          component="h1"
          sx={{ color: "#0F4C75", display: "flex", justifyContent: "center" }}
        >
          Loading...
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {itemsData.map((item, index) => (
            <Grid key={index} item xs={12} sm={4} md={3}>
              <ItemCard itemData={item} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default HomePage;
