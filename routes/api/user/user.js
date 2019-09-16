const getUser = function (req, res){
    res.send({
        username: "Casper Bartholomaus",
        password: "YouNeverKnow",
    });
};

module.exports = {
    getUser,
}