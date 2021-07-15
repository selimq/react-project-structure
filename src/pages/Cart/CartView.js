import { React, useEffect, useState } from 'react'
import { DataGrid } from '@material-ui/data-grid';
import columns from './components/column'
const CartView = () => {

    const [inCarts, setCart] = useState([])

    useEffect(() => {
        const getCart = async () => {
            const inCarts = await fetchInCarts()
            setCart(inCarts)
        }
        getCart()
    }, [])

    //fetch tasks
    const fetchInCarts = async () => {
        const res = await fetch(' http://localhost:5000/inCarts');
        const data = await res.json();

        return data;
    }

    return (
        <div>

            <div style={{ height: 400 }} className="bg-gray-200 w-3/5 m-auto">
                <DataGrid rows={inCarts} columns={columns} pageSize={5} />
            </div>

        </div>
    )
}

export default CartView
