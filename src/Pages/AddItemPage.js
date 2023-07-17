import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

import { addItemInAPI } from "../data/fakeStoreApi";
import { Box, Typography, TextField, Switch, Button } from "../lib/materialUI";

function AddItemPage() {
  const navigte = useNavigate();

  async function handelFormSubmit(event) {
    event.preventDefault();
    const newItem = {};
    newItem.id = nanoid();
    newItem.title = newItem.title = document.getElementById("title").value;
    newItem.description = document.getElementById("description").value;
    newItem.price = document.getElementById("price").value;
    newItem.image = document.getElementById("image").value;
    console.log(await addItemInAPI(newItem));
    toast.success("Item Added Successfully", { theme: "colored" });
    navigte("/"); // navigate to home page
  }

  return (
    <Box
      sx={{
        width: "500px",
        marginX: "auto",
        marginTop: "100px",
      }}
    >
      <form onSubmit={handelFormSubmit}>
        <Typography variant="h4" component="h4" color="#0F4C75" marginY="10px">
          Add New Item
        </Typography>
        <TextField
          label="Title"
          id="title"
          fullWidth
          sx={{ marginBottom: "12px" }}
          required
        />
        <TextField
          label="Description"
          id="description"
          fullWidth
          sx={{ marginBottom: "12px" }}
          required
        />
        <TextField
          label="Price"
          id="price"
          fullWidth
          sx={{ marginBottom: "12px" }}
          required
        />
        <TextField
          label="Image URL"
          id="image"
          fullWidth
          sx={{ marginBottom: "12px" }}
          required
        />

        <Typography variant="p" component="p" color="#0F4C75">
          <Switch required />I accept all terms and conditions
        </Typography>
        <Button variant="outlined" fullWidth type="submit">
          Add
        </Button>
      </form>
    </Box>
  );
}

export default AddItemPage;
