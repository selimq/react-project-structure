import { React, useEffect, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import Button from '@material-ui/core/Button'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { deleteCartItem, updateCartItem, fetchAllCart } from './services/service';


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
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 250 },
    {
      field: 'quantity',
      headerName: 'Quantity',
      type: 'number',
      width: 150,
    },
    {
      field: "inc",
      headerName: "Increase",
      sortable: false,
      width: 150,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        const onClick = () => {
          console.log(params.row)

          params.row.quantity += 1
          updateCartItem(params.row.id, params.row)

        };


        return <Button color="primary" onClick={onClick} variant="contained" startIcon={<AddIcon />}>
          Inc
        </Button>
      }
    },
    {
      field: "dec",
      headerName: "Decrease",
      sortable: false,
      width: 150,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        const onClick = async () => {


          console.log(params.row)

          params.row.quantity -= 1
          await updateCartItem(params.row.id, params.row)
          //* non can be negative 
          if (params.row.quantity == 0) {
            deleteCartItem(params.row.id)
            setCart((value) => value.filter((value) => value.id !== params.row.id))
          }
        };


        return <Button color="secondary" onClick={onClick} variant="contained" startIcon={<RemoveIcon />}>
          Dec
        </Button>
      }
    },
  ];


  return (
    <div>
      <div style={{ height: 400 }} className="bg-gray-200 w-3/5 m-auto">
        <DataGrid rows={inCarts} columns={columns} pageSize={5}></DataGrid>
      </div>
    </div>
  );
};


export default CartView;
