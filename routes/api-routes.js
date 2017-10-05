var db = require("../models");

// Create all our routes and set up logic within those routes where required.

module.exports = function(app) {

  app.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(results) {
      res.render("index", {
        burgers: results
      });
    });
  });

  app.post("/", function(req, res) {
    db.Burger.create({
      name: req.body.name,
      devoured: false
    }).then(function() {
      res.redirect("/")
    }).catch(function(err) {
      res.json(err.errors[0].message);
    });
  });

  app.put("/:id", function(req, res) {
    db.Burger.update({
      devoured:true
    }, {
      where: {
        id: req.params.id
      }
    }).then(function() {
      res.redirect("/")
    });
  });

  app.delete("/:id", function(req, res) {
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function() {
      res.redirect("/")
    }).catch(function() {
      res.json(err);
    });
  });

}