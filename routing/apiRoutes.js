// LOAD DATA
var friendData = require("../app/data/friends");

// ROUTING
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });

    app.post("/api/friends", function (req, res) {
        var scoresInt = [];
        for (var i = 0; i < req.body.scores.length; i++) {
            scoresInt.push(parseInt(req.body.scores[i]));
        }
        req.body.scores = scoresInt;
        friendData.push(req.body);
        res.json(true);
    });
};