module.exports = function(app, mongoose, passport, router) {
	const Interest = mongoose.model("Interest");
	const Follow = mongoose.model("Follow");

	router.post('/followInterest', passport.authenticate('bearer', { session: false }), (req, res) => {
    Interest.findOne({_id: req.body.target}, function(err, target) {
        if (target) {
            var followData = { user: req.user.id, target: req.body.target };
            var follow = new Follow(followData);
            follow.save(function(err) {
                if (err) next(err);

                res.set('Content-Type', 'application/json');
                return res.send({'follow': {'id': req.body.target}});
            });
        } else {
            res.status(404).send('Not found');
        }
    });
	});

	router.post('/unfollowInterest', passport.authenticate('bearer', { session: false }), (req, res) => {
    Follow.findOne({user: req.user.id, target: req.body.target}, function(err, follow) {
      if (follow) {
          follow.remove(function(err) {
              if (err) next(err);
              res.set('Content-Type', 'application/json');
              return res.send({'follow': {'id': req.body.target}});
          });
      } else {
          res.status(404).send('Not found');
      }
    });
	});
};
