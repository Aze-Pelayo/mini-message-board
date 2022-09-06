var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello",
    user: "Ivan",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Mini Messageboard', 
    messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', {
    title: "Send a message"
  } )
})

router.post('/new', function(req, res,next) {
  const messageAuthor = req.body.author;
  const messageText = req.body.message;

  messages.push({
    text: messageText,
    user: messageAuthor,
    added: new Date()
  });

  res.redirect('/');
})
module.exports = router;
