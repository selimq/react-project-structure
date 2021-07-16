//fetch all carts
const fetchAllCart = async () => {
  console.log("fetched");
  const res = await fetch(`http://localhost:5000/inCarts`);
  const data = await res.json();

  return data;
};

//fetch cart item
const fetchCartItem = async (id) => {
  const res = await fetch(`http://localhost:5000/inCarts/${id}`);
  const data = await res.json();

  return data;
};
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

const saveCartItem = async (id, item) => {
  fetch(`http://localhost:5000/inCarts/${id}`)
    .then(handleErrors)
    .then(async (res) => {
      console.log("Mevcut arttırım yapıldı");
      const data = await res.json();
      console.log(data);
      data.quantity += 1;
      await updateCartItem(data.id, data);
    })
    .catch(async (err) => {
      console.log("Mevcut degil ekleniyor");

      let addedObject = {
        id: item.id,
        name: item.name,
        quantity: 1,
        price: item.price,
      };
      await addCartItem(addedObject);
    });
};

const addCartItem = async (item) => {
  const res = await fetch(`http://localhost:5000/inCarts`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(item),
  });
  const data = await res.json();
  return data;
};
const updateCartItem = async (id, updatedItem) => {
  const res = await fetch(`http://localhost:5000/inCarts/${id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(updatedItem),
  });
  const data = await res.json();

  return data;
};
//delete task
const deleteCartItem = async (id) => {
  await fetch(`http://localhost:5000/inCarts/${id}`, {
    method: "DELETE",
  });
  console.log("deleted");
};

//TODO check

// eslint-disable-next-line
export {
  saveCartItem,
  fetchAllCart,
  fetchCartItem,
  updateCartItem,
  deleteCartItem,
};
