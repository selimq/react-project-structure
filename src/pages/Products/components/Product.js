import products from "../products";
import Paper from "@material-ui/core/Paper";
import { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useParams } from "react-router-dom";
import AlertDialog from "./AlertDialog";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { saveCartItem } from "pages/Cart/services/service";
import Image from "material-ui-image";

export default function Product() {
  //name getting from url
  let { name } = useParams();
  //getting flower with name
  const flower = products.find((flower) => flower.name === name);

  //for alert dialog state
  const [open, setOpen] = useState(false);
  //for flower stock state
  const [flowerStock, setFlowerStock] = useState(flower.stock);

  //button add to cart
  const handleAddCart = () => {
    setOpen(true);
    setFlowerStock((flowerStock) => flowerStock - 1);
    saveCartItem(flower.id, flower);
  };
  //handle close alert dialog
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="m-auto flex flex-col">
      <Paper elevation={10} className="m-auto  md:w-2/4 sm:w-4/5 ">
        <div className=" h-88 w-3/5 m-auto">
          <Image src={flower.photoUrl} />
        </div>

        <h3 className="text-center md:text-2xl sm:text-xl p-5">
          {flower.name}
        </h3>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <p className="md:text-2xl  sm:text-2xl text-center  text-red-600 ">
              {flower.price} $<br></br>
              Stock : {flowerStock}
            </p>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="text-center mr-16 p-1">
              <Button
                variant="contained"
                size="large"
                color="secondary"
                onClick={handleAddCart}
              >
                <AddShoppingCartIcon></AddShoppingCartIcon> Sepete Ekle
              </Button>
            </div>
          </Grid>
        </Grid>
        <p className="m-auto text-justify w-4/7 p-8">{flower.detail}</p>
      </Paper>

      {/* alert dialog */}
      <AlertDialog id="alert" handleClose={handleClose} open={open} />
    </div>
  );
}
