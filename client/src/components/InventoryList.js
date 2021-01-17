import React, { useState, useEffect } from "react";
import axios from "axios";

function Storage({ item, date, id, deleteItem }) {
  const [value, setValue] = useState([]);

  const removeItem = (event) => {
    event.preventDefault();
    axios
      .delete(`http://localhost:5000/grocery/${id}`, {
        id: event.target.id.value
      })
      .then((res) => {
        setValue(res.data);
        deleteItem();
      });
    console.log("it deleted");
  };

  let newDate = new Date(date * 1000);
  let dateConvert = `${newDate.getMonth() +
    1}/${newDate.getDate()}/${newDate.getFullYear()}`;

  return (
    <section className='row' id={id}>
      <div className='col s5'>
        <div>
          <p className=''>Ingredient</p>
          <p>{item}</p>
        </div>
      </div>
      <div className='col s5'>
        <div>
          <p>Expiration Date</p>
          <p>{dateConvert}</p>
        </div>
      </div>
      <button className=' col s2 waves-effect waves-light btn secondary' id={id} onClick={removeItem}>
        Remove
      </button>
    </section>
  );
}

function AddNew({ addNew, value, onChange }) {
  const [item, setItems] = useState([]);
  const grocery = `http://localhost:5000/grocery`;

  const newItem = (event) => {
    event.preventDefault();
    axios
      .post(grocery, {
        item: event.target.item.value,
        dateExpire: event.target.date.value
      })
      .then((res) => {
        setItems(res.data);
        addNew();
      });
    event.target.reset();
  };

  useEffect(() => {}, []);

  return (
    <div className='row valign-wrapper'>
      <form className='col s12' onSubmit={newItem}>
        <div className='row'>
          <div className='input-field col s10'>
            <label className='active' for='last_name'>
              Ingredient
            </label>
            <input
              id='last_name'
              name='item'
              type='text'
              placeholder='Grocery Item'></input>
          </div>

          <div className='col s10'>
            <label className='active' for='first_name'>
              Expiration Date
            </label>
            <input type='date' name='date' id='first_name'></input>
          </div>
          <div className='align-wrapper col s10'>
            <button className='waves-effect waves-light btn primary'>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default function Inventory({ addNew }) {
  //set state
  const [inv, setInv] = useState([]);

  // did mount
  useEffect(() => {
    invItems();
  }, []);

  // get all data from shopping list model
  const invItems = () => {
    axios.get(`http://localhost:5000/grocery`).then((res) => {
      console.log(res.data);
      setInv(res.data);
    });
  };

  return (
    <section className='container'>
      <h3 className=''>Inventory</h3>
      <AddNew addNew={invItems} />
      <div className='container'>
        {inv.map((inv) => (
          <Storage
            id={inv._id}
            item={inv.item}
            date={inv.dateExpire}
            deleteItem={invItems}
          />
        ))}
      </div>
    </section>
  );
}
