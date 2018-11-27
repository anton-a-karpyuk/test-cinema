const models = require('../models');

exports.getSeats = function(req, res) {
    let query = "Select seatNumber, if(owner is null, 'free', 'booked') as status  from seats order by seatNumber";
    models.Seat.sequelize.query(query).spread((results, metadata) => {
            return res.status(200).json(results);
        }).catch((err) => {
            return res.status(500).send(err);
        });
};

exports.putSeat = function(req, res) {
    let query = "UPDATE seats SET ";
    if (req.body.newStatus === "free")
        query += "owner = NULL where owner = :owner";
    else
        query += "owner = :owner WHERE owner is null";
    query+=" and seatNumber = :id";
    models.Seat.sequelize.query(query, { replacements: {owner: req.user, id: req.params.id  }}).spread((results, metadata) => {
        return res.status(200).json({"success": !!metadata.changedRows});
    }).catch((err) => {
        return res.status(500).send(err);
    });
};