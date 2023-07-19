import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

import { addItemInAPI } from "../api/fakeStoreApi";
import { validateFormData } from "../utility/fromValidation";
import { Box, Typography, TextField, Switch, Button } from "../lib/materialUI";

function AddItemPage() {
  const navigte = useNavigate();
  const [validInput, setValidInput] = useState({
    title: true,
    description: true,
    price: true,
    image: true,
  });

  async function handelFormSubmit(event) {
    event.preventDefault();
    const newItem = {};
    newItem.id = nanoid();
    newItem.title = event.target.title.value;
    newItem.description = event.target.description.value;
    newItem.price = event.target.price.value;
    newItem.image = event.target.image.value;
    validateFormData(newItem).then((result) => {
      setValidInput(result);
      if (Object.values(result).includes(false)) {
        return;
      } else {
        addItemInAPI(newItem).then((result) => {
          if (result) {
            toast.success("Item Added Successfully", { theme: "colored" });
            navigte("/");
          } else {
            toast.error("Unable to Add Item", { theme: "colored" });
          }
        });
      }
    });
  }
  return (
    <Box
      sx={{
        maxWidth: "500px",
        marginX: "auto",
        marginTop: "100px",
      }}
    >
      <form onSubmit={handelFormSubmit} autoComplete="false">
        <Typography variant="h4" component="h4" color="#0F4C75" marginY="10px">
          Add New Item
        </Typography>
        <TextField
          {...(!validInput.title && {
            error: true,
            helperText: "Title should be atleast 3 characters",
          })}
          label="Title"
          id="title"
          fullWidth
          sx={{ marginBottom: "12px" }}
        />
        <TextField
          {...(!validInput.description && {
            error: true,
            helperText: "Description should be atleast 10 characters",
          })}
          label="Description"
          id="description"
          fullWidth
          sx={{ marginBottom: "12px" }}
        />
        <TextField
          {...(!validInput.price && {
            error: true,
            helperText: "Price should be a positive number",
          })}
          label="Price"
          id="price"
          fullWidth
          sx={{ marginBottom: "12px" }}
        />
        <TextField
          {...(!validInput.image && {
            error: true,
            helperText: "Invalid Image URL",
          })}
          label="Image URL"
          id="image"
          fullWidth
          sx={{ marginBottom: "12px" }}
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
