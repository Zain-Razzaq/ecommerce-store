import { TextField, Button } from "../lib/materialUI";

function FormInputs({
  register,
  errors,
  defaultValues: { title, description, price, image },
}) {
  return (
    <>
      <TextField
        label="Title"
        defaultValue={title}
        {...register("title", { required: true, minLength: 3 })}
        error={!!errors.title}
        helperText={errors.title && "Title should be atleast 3 characters"}
        fullWidth
        sx={{ marginBottom: "12px" }}
      />
      <TextField
        label="Description"
        defaultValue={description}
        {...register("description", { required: true, minLength: 10 })}
        error={!!errors.description}
        helperText={
          errors.description && "Description should be atleast 10 characters"
        }
        fullWidth
        sx={{ marginBottom: "12px" }}
      />
      <TextField
        label="Price"
        defaultValue={price}
        {...register("price", {
          required: true,
          min: 0,
          pattern: /^\d*\.?\d+$/,
        })}
        error={!!errors.price}
        helperText={errors.price && "Price should be atleast 0"}
        fullWidth
        sx={{ marginBottom: "12px" }}
      />
      <TextField
        label="Image URL"
        defaultValue={image}
        {...register("image", {
          required: true,
          pattern: /^(ftp|http|https):\/\/[^ "]+$/,
        })}
        error={!!errors.image}
        helperText={errors.image && "Image URL is required"}
        fullWidth
        sx={{ marginBottom: "12px" }}
      />
      <Button variant="outlined" fullWidth type="submit">
        Submit
      </Button>
    </>
  );
}

export default FormInputs;
