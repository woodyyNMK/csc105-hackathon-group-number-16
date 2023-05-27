module.exports = (req, res) => {
    const id = req.params.id;
	connection.query("SELECT * FROM Menus WHERE id = ?",[id], (err, rows) => {
		// Check if cannot find the data in the database then return the error
		if (err) {
			res.json({
				success: false,
				data: null,
				error: err.message,
			});
		} else {
			// Return data to the client if success
			return res.json({
				success: true,
				data: rows[0],
				error: null,
			});
		}
	});
};
