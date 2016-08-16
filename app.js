var express = require('express');
var cheerio = require('cheerio');
var superagent = require('superagent');

var app = express();

app.get('/', function (req, res, next) {
  superagent.get('https://cnodejs.org/')
    .end(function (err, sres) {
      if (err) {
        return next(err);
      }
      var $ = cheerio.load(sres.text);
      var items = [];
      $('#topic_list .cell').each(function (idx, element) {
        var $author = $(element).find('.user_avatar img');
         var $el = $(element).find('.topic_title');
        items.push({
          title: $el.attr('title'),
          href: $el.attr('href'),
          author:$author.attr('title')
        });
      });

     

      res.send(items);
    });
});


app.listen(3000, function () {
  console.log('app is listening at port 3000');
});