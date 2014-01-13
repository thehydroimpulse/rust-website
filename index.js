/**
 * Module dependencies.
 */

var express   = require('express');
var app       = express();
var hbs       = require('express-hbs');
var marked    = require('marked');
var highlight = require('pygmentize-bundled');
var renderer  = new marked.Renderer();

/**
 * Marked
 */

marked.setOptions({
  renderer: renderer,
  gfm: true,
  tables: true,
  breaks: true,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: true,
  langPrefix: "lang-",
  highlight: function(code, lang, callback) {
    highlight({ lang: lang, format: 'html', options: { nowrap: true } }, code, function(err, html) {
      callback(err, html.toString());
    });
  }
});

/**
 * Code
 */

renderer.code = function(code, lang) {
  return '\n<div class="highlight">'
    + '<pre>'
    + '<code>'
    + code
    + '</code>'
    + '</pre>'
    + '</div>\n';
};

/**
 * Markdown
 *
 * XXX: There's currently a bug in the markdown processing in combination
 *      with layouts. If there's a `markdown` block in the layout AND in
 *      a template, the layout block will be replaced with garbage characters,
 *      while the templates will be rendered correctly.
 */

hbs.registerAsyncHelper('markdown', function(options, fn) {
  var text = options.fn(this).trim();
  var html = '<div class="markdown">';

  marked(text, function(err, content) {
    fn(html + content + '</div>');
  });
});

/**
 * Middleware
 */

app.use(express.errorHandler());
app.use('/public', express.static(__dirname + '/public'));
app.use(express.logger());
app.use(express.urlencoded());
app.use(express.json());
app.use(express.methodOverride());
app.set('views', __dirname + '/views');

app.engine('html', hbs.express3({
  partialsDir: __dirname + '/views',
  layoutsDir: __dirname + '/views/layouts',
  extname: '.html'
}));

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.use(app.router);

/**
 * @root
 */

app.get('/', function(req, res)
{
  res.render('index', {
    home: true // Display the download button and stuff.
  });
});

/**
 * @route GET /changelog/:version
 */

app.get('/changelog/:version', function(req, res)
{
  res.render('changelog/show', {
    version: req.params.version
  });
});

/**
 * Listen
 */

app.listen(3000);