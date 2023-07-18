import { toast } from "react-toastify";

function getDataFromAPI() {
  return fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

function deleteItemFromAPI(id) {
  return fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      toast.success("Item Deleted Successfully", { theme: "colored" });
      return true;
    })
    .catch((error) => {
      toast.error("Unable to Delete Item", { theme: "colored" });
      return false;
    });
}

function addItemInAPI({ title, price, description, image, category }) {
  return fetch("https://fakestoreapi.com/products", {
    method: "POST",
    body: JSON.stringify({
      title: title,
      price: price,
      description: description,
      image: image,
      category: category,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      toast.success("Item Added Successfully", { theme: "colored" });
    })
    .catch((error) => toast.error("Unable to Add Item", { theme: "colored" }));
}

function getDataForId(id) {
  return fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .catch((error) => console.error(error));
}

function updateItemInAPI(updatedItem) {
  console.log(updatedItem);
  const { id, title, price, description, image, category } = updatedItem;
  return fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title: title,
      price: price,
      description: description,
      image: image,
      category: category,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      toast.success("Item Updated Successfully", { theme: "colored" });
    })
    .catch((error) =>
      toast.error("Unable to Update Item", { theme: "colored" })
    );
}

export {
  getDataFromAPI,
  deleteItemFromAPI,
  addItemInAPI,
  getDataForId,
  updateItemInAPI,
};
