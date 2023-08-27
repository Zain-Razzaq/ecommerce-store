import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import { Box, Typography } from "../lib/materialUI";
import { getProductById, updateItemInAPI } from "../data/fakeStoreApi";
import { useForm } from "react-hook-form";
import FormInputs from "../utility/formInputs";
import Loader from "../components/loader/loader";

function EditPage() {
  const { id } = useParams();
  const navigte = useNavigate();
  const [itemDataToEdit, setItemDataToEdit] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const getData = async () => {
      const data = await getProductById(id);
      setItemDataToEdit(data);
    };
    getData();
  }, [id]);

  async function handelFormSubmit(data) {
    const newItem = {
      id,
      ...data,
    };
    updateItemInAPI(newItem).then((result) => {
      if (result) {
        toast.success("Item Updated Successfully", { theme: "colored" });
        navigte("/");
      } else {
        toast.error("Unable to Update Item", { theme: "colored" });
      }
    });
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
      <form onSubmit={handleSubmit(handelFormSubmit)}>
        <Typography variant="h4" component="h2" color="#0F4C75" marginY="20px">
          Edit Product
        </Typography>
        <FormInputs
          register={register}
          errors={errors}
          defaultValues={itemDataToEdit}
        />
        <img
          src={itemDataToEdit.image}
          alt="Product"
          style={{
            maxWidth: "590px",
            maxHeight: "400px",
            marginTop: "20px",
          }}
        />
      </form>
    </Box>
  ) : (
    <Loader />
  );
}

export default EditPage;
