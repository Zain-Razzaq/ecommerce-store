import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { Box, Typography, TextField, Button } from "../lib/materialUI";
import { getDataForId, updateItemInAPI } from "../data/fakeStoreApi";

function EditPage() {
  const { id } = useParams();
  const navigte = useNavigate();
  const [itemDataToEdit, setItemDataToEdit] = useState({});

  useEffect(() => {
    const getData = async () => {
      const data = await getDataForId(id);
      setItemDataToEdit(data);
    };
    getData();
  }, []);

  function setImageInForm() {
    setItemDataToEdit({
      ...itemDataToEdit,
      image: document.getElementById("image").value,
    });
  }

  async function handelFormSubmit(event) {
    event.preventDefault();
    const newItem = {};
    newItem.id = id;
    newItem.title = document.getElementById("title").value;
    newItem.description = document.getElementById("description").value;
    newItem.price = document.getElementById("price").value;
    newItem.image = document.getElementById("image").value;
    await updateItemInAPI(newItem);
    navigte("/"); // navigate to home page
  }

  return (
    itemDataToEdit.id && (
      <Box
        sx={{
          padding: "1rem",
          margin: "70px auto",
          maxWidth: "600px",
        }}
      >
        <form onSubmit={handelFormSubmit}>
          <Typography
            variant="h4"
            component="h2"
            color="#0F4C75"
            marginY="20px"
          >
            Edit Product
          </Typography>
          <TextField
            defaultValue={itemDataToEdit.title}
            label="Title"
            id="title"
            fullWidth
            sx={{ marginBottom: "12px" }}
          />
          <TextField
            defaultValue={itemDataToEdit.description}
            label="Description"
            id="description"
            fullWidth
            multiline
            sx={{ marginBottom: "12px" }}
          />
          <TextField
            defaultValue={itemDataToEdit.price}
            label="Price"
            id="price"
            fullWidth
            sx={{ marginBottom: "12px" }}
          />
          <TextField
            defaultValue={itemDataToEdit.image}
            label="Image URL"
            id="image"
            fullWidth
            sx={{ marginBottom: "12px" }}
            onChange={setImageInForm}
          />
          <img
            src={itemDataToEdit.image}
            alt="Product"
            style={{
              maxWidth: "590px",
              maxHeight: "400px",
            }}
          />
          <Button variant="outlined" fullWidth type="submit">
            Save Changes
          </Button>
        </form>
      </Box>
    )
  );
}

export default EditPage;
