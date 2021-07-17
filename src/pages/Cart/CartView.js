import { React, useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import {
  deleteCartItem,
  updateCartItem,
  fetchAllCart,
} from "./services/service";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

const CartView = () => {
  const [inCarts, setCart] = useState([]);

  useEffect(() => {
    const getCart = async () => {
      const inCarts = await fetchAllCart();
      setCart(inCarts);
    };
    getCart();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Name", width: 200 },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      width: 120,
      valueFormatter: (params) => {
        const valueFormatted = params.value + "$";
        return `${valueFormatted} `;
      },
    },
    {
      field: "quantity",
      headerName: "Quantity",
      type: "number",
      width: 130,
    },

    {
      field: "inc",
      headerName: " ",
      sortable: false,
      width: 75,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        const onClick = /*async*/ () => {
          console.log(params.row);

          params.row.quantity += 1;
          updateCartItem(params.row.id, params.row);
          setCart((value) =>
            value.map((value) =>
              value.id === params.row.id
                ? { ...value, quantity: params.row.quantity }
                : value
            )
          );
          // setCart(await fetchAllCart());
        };

        return (
          <Button color="primary" onClick={onClick} variant="contained">
            <AddIcon />
          </Button>
        );
      },
    },
    {
      field: "dec",
      headerName: " ",
      sortable: false,
      width: 75,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        const onClick = async () => {

          //* non can be negative
          if (params.row.quantity === 1) {
            setCart((value) =>
              value.filter((value) => value.id !== params.row.id)
            );
            await deleteCartItem(params.row.id);

          }
          //if not negative setState
          else {
            params.row.quantity -= 1;

            setCart((value) =>
              value.map((value) =>
                value.id === params.row.id
                  ? { ...value, quantity: params.row.quantity }
                  : value
              )
            );
            await updateCartItem(params.row.id, params.row);

          }
        };

        return (
          <Button color="secondary" onClick={onClick} variant="contained">
            {params.row.quantity === 1 ? <DeleteIcon /> : <RemoveIcon />}
          </Button>
        );
      },
    },
  ];

  return (
    <div>
      <Grid container spacing={1}>
        {/* table */}

        <Grid item xs={12} sm={8}>
          <div style={{ height: 400 }} className="bg-gray-200 m-auto mx-9">
            <DataGrid rows={inCarts} columns={columns} pageSize={5}></DataGrid>
          </div>
        </Grid>
        {/* total */}
        <Grid item xs={12} sm={4}>
          <Container className="bg-blue-100  rounded-2xl  ">
            {inCarts.map((element) => {
              return (
                <div>
                  <Grid container>
                    <Grid item xs={18} sm={6}>
                      <p className=" text-left">{element.name}</p>
                    </Grid>
                    <Grid item xs={18} sm={3}>
                      <p className="">x {element.quantity}</p>
                    </Grid>
                    <Grid item xs={18} sm={3}>
                      <p className=""> = {element.quantity * element.price}</p>
                    </Grid>
                  </Grid>
                </div>
              );
            })}
            <p>
              Total:
              {inCarts.reduce(
                (sum, { price, quantity }) => sum + price * quantity,
                0
              )}{" "}
              $
            </p>

            <div className="p-5">
              <Button
                variant="contained"
                style={{ backgroundColor: "#04151f", color: "white" }}
              >
                {" "}
                Purchase
              </Button>
            </div>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
};

export default CartView;
