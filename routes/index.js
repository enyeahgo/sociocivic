var express = require('express');
var router = express.Router();
var admin = require('../Admin');
var db = admin.database();

router.get('/', (req, res) => {
  getRandomQuote().then(quote => {
    res.render('index', {
      title: 'Socio-Civic',
      tagline: 'Collaboration. Commitment. Cooperation.',
      images: [ '/img/carousel/c1.jpeg', '/img/carousel/c2.jpeg', '/img/carousel/c3.jpeg' ],
      quote: quote
    });
  });
});

async function getRandomQuote() {
  let result;
  await db.ref('Bible').once('value').then(snapshot => {
    let quotes = Object.values(snapshot.val());
    let randomSection = Math.floor(Math.random() * (quotes.length - 1) + 1);
    let chapters = quotes[randomSection].chapters;
    let name = quotes[randomSection].name;
    let randomChapter = Math.floor(Math.random() * (chapters.length - 1) + 1);
    let verses = chapters[randomChapter];
    let randomVerse = Math.floor(Math.random() * (verses.length - 1) + 1);
    result = `${quotes[randomSection].chapters[randomChapter][randomVerse]} - ${name} ${randomChapter+1}:${randomVerse+1}`
  });
  return Promise.resolve(result);
}

module.exports = router;