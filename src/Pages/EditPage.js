import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { Box, Typography, TextField, Button } from "../lib/materialUI";
import { getProductById, updateItemInAPI } from "../data/fakeStoreApi";
import { validateFormData } from "../utility/fromValidation";

function EditPage() {
  const { id } = useParams();
  const navigte = useNavigate();
  const [itemDataToEdit, setItemDataToEdit] = useState({});
  const [validInput, setValidInput] = useState({
    title: true,
    description: true,
    price: true,
    image: true,
  });

  useEffect(() => {
    const getData = async () => {
      const data = await getProductById(id);
      setItemDataToEdit(data);
    };
    getData();
  }, [id]);

  function setImageInForm() {
    setItemDataToEdit({
      ...itemDataToEdit,
      image: document.getElementById("image").value,
    });
  }

  async function handelFormSubmit(event) {
    event.preventDefault();
    const newItem = {
      id,
      title: event.target.title.value,
      description: event.target.description.value,
      price: event.target.price.value,
      image: event.target.image.value,
    };
    const result = await validateFormData(newItem);
    setValidInput(result);
    if (Object.values(result).includes(false)) {
      return;
    } else {
      updateItemInAPI(newItem).then((result) => {
        if (result) {
          toast.success("Item Updated Successfully", { theme: "colored" });
          navigte("/");
        } else {
          toast.error("Unable to Update Item", { theme: "colored" });
        }
      });
    }
  }

  return itemDataToEdit.id ? (
    <Box
      sx={{
        padding: "1rem",
        margin: "70px auto",
        maxWidth: "600px",
        overflow: "hidden",
      }}
    >
      <form onSubmit={handelFormSubmit}>
        <Typography variant="h4" component="h2" color="#0F4C75" marginY="20px">
          Edit Product
        </Typography>
        <TextField
          defaultValue={itemDataToEdit.title}
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
          defaultValue={itemDataToEdit.description}
          {...(!validInput.description && {
            error: true,
            helperText: "Description should be atleast 10 characters",
          })}
          label="Description"
          id="description"
          fullWidth
          multiline
          sx={{ marginBottom: "12px" }}
        />
        <TextField
          defaultValue={itemDataToEdit.price}
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
          defaultValue={itemDataToEdit.image}
          {...(!validInput.image && {
            error: true,
            helperText: "Invalid Image URL",
          })}
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
  ) : (
    <Typography
      variant="h4"
      component="h1"
      sx={{
        marginTop: "90px",
        color: "#0F4C75",
        display: "flex",
        justifyContent: "center",
      }}
    >
      Loading...
    </Typography>
  );
}

export default EditPage;
