const express = require("express");
const router = express.Router();
const Grocery = require("../../models/Grocery");

//get all objects

router.get("/", async (req, res) => {
	try {
		const invItem = await Grocery.find({});
		res.json(invItem);
	} catch (err) {
		res.json({ message: err });
	}
});

// post new item

router.post("/", async (req, res) => {
	const inv = new Grocery({
		item: req.body.item,
		dateExpire: Math.round(new Date(req.body.dateExpire).getTime()/1000)
	});

	try {
		const savedInv = await inv.save();
		res.json(savedInv);
	} catch (err) {
		res.json({ message: err });
	}
});

// specific grocery item

router.get("/:invId", async (req, res) => {
	try {
		const invID = await Grocery.findById(req.params.invId);
		res.json(invID);
	} catch (err) {
		res.json({ message: err });
	}
});

// delete an item

router.delete("/:invId", async (req, res) => {
	try {
		const removedInv = await Grocery.deleteOne({ _id: req.params.invId });
		res.json(removedInv);
	} catch (err) {
		res.json({ message: err });
	}
});

// update an item

router.patch("/:invId", async (req, res) => {
	try {
		const updateInv = await Grocery.updateOne(
			{ _id: req.params.invId },
			{ $set: { item: req.body.item } }
		);
		res.json(updateInv);
	} catch (err) {
		res.json({ message: err });
	}
});

module.exports = router;
