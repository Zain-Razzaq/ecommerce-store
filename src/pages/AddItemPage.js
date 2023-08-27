import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

import { addItemInAPI } from "../data/fakeStoreApi";
import { Box, Typography } from "../lib/materialUI";
import FormInputs from "../utility/formInputs";

function AddItemPage() {
  const navigte = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function handelFormSubmit(data) {
    const newItem = {
      id: nanoid(),
      ...data,
    };
    addItemInAPI(newItem).then((result) => {
      if (result) {
        toast.success("Item Added Successfully", { theme: "colored" });
        navigte("/");
      } else {
        toast.error("Unable to Add Item", { theme: "colored" });
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
      <form onSubmit={handleSubmit(handelFormSubmit)} autoComplete="false">
        <Typography variant="h4" component="h4" color="#0F4C75" marginY="10px">
          Add New Item
        </Typography>
        <FormInputs register={register} errors={errors} defaultValues={{}}/>
      </form>
    </Box>
  );
}

export default AddItemPage;
