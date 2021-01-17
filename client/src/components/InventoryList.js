import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
					<p>{item}</p>
				</div>
			</div>
			{/* <div className='col s5'>
        <div>
          <p>Expiration Date</p>
          <p>{dateConvert}</p>
        </div>
      </div> */}
			<button
				className=' col s2 waves-effect waves-light btn secondary'
				id={id}
				onClick={removeItem}>
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
				item: event.target.item.value
			})
			.then((res) => {
				setItems(res.data);
				addNew();
			});
		event.target.reset();
	};

	useEffect(() => {}, []);

	return (
		<div className=' row valign-wrapper'>
			<form className='col s12' onSubmit={newItem}>
				<div className='row'>
					<p>
						Click on the icon and start telling us which ingredients you have,
						we'll cook up something great!
					</p>
					<div className='inv-textbox'>
						<input
							class='grocery-input'
							id='last_name'
							name='item'
							type='text'
							placeholder='Tap to make a list.'></input>
					</div>

					<div className='inv-textbox'>
						<button className='button button1'>Submit</button>
					</div>
					<Link to='/recipe'>Find Recipes</Link>
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
		<section className='inv-bg inv-container'>
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
