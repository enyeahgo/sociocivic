var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Socio-Civic',
    tagline: 'Collaboration. Commitment. Cooperation.',
    images: [ '/img/carousel/c1.jpeg', '/img/carousel/c2.jpeg', '/img/carousel/c3.jpeg' ],
    quote: getRandomQuote()
  });
});

function getRandomQuote() {
  let quotes = [
    "Carry each other’s burdens and so you will fulfill the law of Christ. - GALATIANS 6:2",
    "Don’t forget to do good and to share what you have because God is pleased with these kinds of sacrifices. - HEBREWS 13:16",
    "This is my commandment: love each other just as I have loved you. - JOHN 15:12",
  ];
  return quotes[(Math.floor(Math.random() * (quotes.length - 1) + 1))];
}

module.exports = router;