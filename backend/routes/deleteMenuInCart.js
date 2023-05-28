module.exports = (req, res) => {
    const id = req.params.id;

    connection.query("DELETE FROM Cart_menus WHERE id = ?", [id], (err, rows) => {
        if(err) {
            return res.json({
                success: false,
                data: null,
                error: err.message,
            });
        } else {
            if (rows) {
                res.send({
                    success: true,
                    data: {
                        message: "Menu deleted"
                    },
                });
            }
        }
    });
}