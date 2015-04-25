/**
 * GET /
 * Home page.
 */
exports.index = function(req, res) {
  res.render('home', {
    title: 'Home'
  });
};

exports.cobjet = function(req, res) {
    res.render('cobjet', {
          title: 'Worker Hive'
              });
};

