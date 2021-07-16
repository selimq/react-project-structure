import products from "../products";
import Paper from "@material-ui/core/Paper";
import { useState, forwardRef } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useParams } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import DoneGif from "../../../assets/pictures/done.gif";
import { Link } from "react-router-dom";
import { CART } from "../../../navigation/CONSTANTS";
import { saveCartItem } from "pages/Cart/services/service";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Product() {
  let { id } = useParams();
  const flower = products[id];

  const [open, setOpen] = useState(false);
  const [flowerStock, setFlowerStock] = useState(flower.stock);
  const handleAddCart = () => {
    setOpen(true);
    setFlowerStock((flowerStock) => flowerStock - 1);

    saveCartItem(id, flower);
  };

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
              {flower.price} $
              <br></br>
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
      <Dialog
        open={open}
        TransitionComponent={Transition}
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          <div></div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <span className="text-xl text-black">
              Sepete eklendi <br /> <br />
              --eklenmedi
            </span>

            <img
              className="absolute h-20 w-20 m-auto right-5 top-5"
              src={DoneGif}
              alt="loading..."
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <span className="p-1"></span>
          <Button onClick={handleClose} color="primary" variant="contained">
            Kapat
          </Button>
          <span className="p-1"></span>

          <Link to={CART}>
            <Button
              onClick={handleClose}
              color="primary"
              variant="contained"
              className="p-2"
            >
              Sepete Git
            </Button>
          </Link>
          <span className="p-1"></span>
        </DialogActions>
      </Dialog>
    </div>
  );
}
