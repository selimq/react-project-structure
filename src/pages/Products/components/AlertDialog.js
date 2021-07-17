import { forwardRef } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import DoneGif from "../../../assets/pictures/done.gif";
import { Link } from "react-router-dom";
import { CART } from "../../../navigation/CONSTANTS";
import Button from "@material-ui/core/Button";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AlertDialog = ({ handleClose, open }) => {
  return (
    <Dialog open={open} TransitionComponent={Transition} onClose={handleClose}>
      <DialogTitle>
        <div></div>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <span className="text-xl text-black">
            Sepete eklendi <br /> <br />
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
  );
};

export default AlertDialog;
