import { React, useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

import { getDataFromAPI, deleteItemFromAPI } from "../api/fakeStoreApi";
import ItemCard from "../components/ItemCard";
import { Container, Typography, Grid, Button } from "../lib/materialUI";
import { itemDeletedByID, itemsInitialized } from "../data/itemsData";

function HomePage() {
  const items = useSelector((state) => state.itemsData);
  const searchText = useSelector((state) => state.searchText);
  const dispatch = useDispatch();

  useEffect(() => {
    getDataFromAPI().then((data) => dispatch(itemsInitialized(data)));
  }, [dispatch]);

  useEffect(() => {
    const searchTime = setTimeout(() => {
      getDataFromAPI(searchText).then((data) => {
        const filteredData = data.filter((item) =>
          item.title.toLowerCase().includes(searchText.toLowerCase())
        );
        dispatch(itemsInitialized(filteredData));
      });
    }, 500);
    return () => clearTimeout(searchTime);
  }, [dispatch, searchText]);

  async function deleteItem(id) {
    const deleted = await deleteItemFromAPI(id);
    if (deleted) {
      toast.success("Item Deleted Successfully", { theme: "colored" });
      dispatch(itemDeletedByID(id));
    } else toast.error("Unable to Delete Item", { theme: "colored" });
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
      {items.length ? (
        <Grid container spacing={2}>
          {items.map((item) => (
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
