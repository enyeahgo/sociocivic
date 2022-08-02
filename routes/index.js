var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Socio-Civic',
    tagline: 'Collaboration. Commitment. Cooperation.'
  });
});

module.exports = router;