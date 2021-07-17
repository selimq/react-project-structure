import products from "../products";
import Paper from "@material-ui/core/Paper";
import { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useParams } from "react-router-dom";
import AlertDialog from "./AlertDialog";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { saveCartItem } from "pages/Cart/services/service";

export default function Product() {
  //id getting from url
  let { id } = useParams();
  //getting flower with id
  const flower = products[id - 1]
  //for alert dialog state
  const [open, setOpen] = useState(false);
  //for flower stock state
  const [flowerStock, setFlowerStock] = useState(flower.stock);

  //button add to cart
  const handleAddCart = () => {
    setOpen(true);
    setFlowerStock((flowerStock) => flowerStock - 1);
    saveCartItem(id, flower);
  };
  //handle close alert dialog
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Paper elevation={10} className="m-auto w-2/4">
        <img src={flower.photoUrl} alt={flower.name} className="m-auto" />
        <h3 className="lg:text-2xl  sm:text-l p-8">{flower.name}</h3>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <p className="lg:text-2xl  sm:text-l  text-red-600 ">
              {flower.price} $<br></br>
              Stock : {flowerStock}
            </p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              size="large"
              color="secondary"
              onClick={handleAddCart}
            >
              <AddShoppingCartIcon></AddShoppingCartIcon> Sepete Ekle
            </Button>
          </Grid>
        </Grid>
        <p className="m-auto text-justify w-4/7 p-8">{flower.detail}</p>
      </Paper>

      {/* alert dialog */}
      <AlertDialog id="alert" handleClose={handleClose} open={open} />
    </div>
  );
}
