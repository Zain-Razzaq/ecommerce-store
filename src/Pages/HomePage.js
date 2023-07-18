import { React, useEffect } from "react";

import { getDataFromAPI, deleteItemFromAPI } from "../data/fakeStoreApi";
import ItemCard from "../components/ItemCard";
import { Container, Typography, Grid, Button } from "../lib/materialUI";

function HomePage({ itemsData, setItemsData, searchText }) {
  useEffect(() => {
    getDataFromAPI().then((data) => setItemsData(data));
  }, []);

  useEffect(() => {
    const searchTime = setTimeout(() => {
      getDataFromAPI(searchText).then((data) => {
        const filteredData = data.filter((item) =>
          item.title.toLowerCase().includes(searchText.toLowerCase())
        );
        setItemsData(filteredData);
      });
    }, 500);
    return () => clearTimeout(searchTime);
  }, [searchText]);

  async function deleteItem(id) {
    const deleted = await deleteItemFromAPI(id);
    deleted && setItemsData(itemsData.filter((item) => item.id !== id));
  }

  return (
    <Container maxWidth="lg" sx={{ marginTop: "80px" }}>
      <Typography variant="h4" component="h1" marginY={4} color={"#0F4C75"}>
        All Categories
      </Typography>
      <Button
        href="/add"
        sx={{ position: "absolute", top: "80px", right: "30px" }}
        variant="contained"
      >
        Add
      </Button>
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
          NO ITEMS FOUND
        </Typography>
      )}
    </Container>
  );
}

export default HomePage;
