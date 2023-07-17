import React from "react";

import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Rating,
  CardActions,
  Box,
  IconButton,
  Icon,
} from "../lib/lib";

function ItemCard({
  itemData: { id, title, description, image, price },
  deleteItem,
}) {
  return (
    <Card
      sx={{
        maxWidth: 330,
        border: "3px solid #3282B8",
        "&:hover": { boxShadow: "20px 10px 10px #ddd" },
      }}
    >
      <CardMedia
        component="img"
        alt="green iguana"
        image={image}
        height="250"
      />
      <CardContent
        sx={{
          padding: "10px",
          "&:last-child": {
            paddingBottom: 1,
          },
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ color: "#3282B8", height: "30px", overflow: "hidden" }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ height: "100px", marginBottom: "10px", overflow: "scroll" }}
        >
          {description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Rating
            name="half-rating-read"
            defaultValue={4.5}
            precision={0.5}
            size="small"
            readOnly
          />
          <Typography variant="body2" color="text.secondary" mx={1}>
            4.5 (23)
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6" color={"#3282B8"}>
            ${price}
          </Typography>
          <Typography
            sx={{ color: "green" }}
            variant="body2"
            color="text.secondary"
            mx={1}
          >
            In stock
          </Typography>
          <CardActions>
            <IconButton color="primary">
              <Icon>edit</Icon>
            </IconButton>
            <IconButton color="primary" onClick={() => deleteItem(id)}>
              <Icon>delete</Icon>
            </IconButton>
          </CardActions>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ItemCard;
