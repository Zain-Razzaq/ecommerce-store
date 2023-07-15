import * as React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Icon, IconButton, Rating } from "@mui/material";

function ItemCard({ itemData }) {
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
        image={itemData.image}
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
          {itemData.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ height: "100px", marginBottom: "10px", overflow: "scroll" }}
        >
          {itemData.description}
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
            ${itemData.price}
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
            <IconButton color="primary">
              <Icon>delete</Icon>
            </IconButton>
          </CardActions>
        </Box>
      </CardContent>
    </Card>
  );
}

export default ItemCard;
