import products from "../products";
import Paper from "@material-ui/core/Paper";
import { useState, forwardRef } from 'react';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useParams } from "react-router-dom";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import DoneIcon from '@material-ui/icons/Done';
import { Link } from 'react-router-dom';
import { CART } from '../../../navigation/CONSTANTS';


const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});


export default function Product() {

    let { id } = useParams();
    const flower = products[id];

    const [open, setOpen] = useState(false);
    const [flowerStock, setFlowerStock] = useState(flower.stock)
    const handleClickOpen = () => {
        setOpen(true);
        setFlowerStock((flowerStock) => flowerStock - 1)

    };

    const handleClose = () => {
        setOpen(false);
    };



    return (
        <div>
            <Paper elevation={10} className="m-auto w-2/4">
                <img src={flower.photoUrl} alt={flower.name} className="m-auto" />
                <h3 className="lg:text-2xl  sm:text-l p-5">{flower.name}</h3>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <h3 className="lg:text-2xl  sm:text-l py-2 text-red-600 ">
                            {flower.price}<br></br>
                            Stock : {flowerStock}
                        </h3>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Button
                            className="py-3"
                            variant="contained"
                            size="large"
                            color="secondary"
                            onClick={handleClickOpen}
                        >
                            {" "}
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
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{ }</DialogTitle>
                <DialogContent>
                    <DialogContentText >
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={9}>
                                <h1 className="text-xl text-black">Sepete eklendi <br /> <br />--eklenmedi</h1>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <DoneIcon fontSize="large" className="text-green-500"></DoneIcon>
                            </Grid>
                        </Grid>


                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <p className="p-1"></p>
                    <Button onClick={handleClose} color="primary" variant="contained">
                        Kapat
                    </Button>
                    <p className="p-1"></p>

                    <Link to={CART}>
                        <Button onClick={handleClose} color="primary" variant="contained" className="p-2">
                            Sepete  Git
                        </Button>
                    </Link>
                    <p className="p-1"></p>


                </DialogActions>
            </Dialog>

        </div>
    );
}
