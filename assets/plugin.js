require('gitalk/dist/gitalk.css')
const gitbook = require('gitbook')
const Gitalk = require('gitalk')

gitbook.events.bind('page.before', function(page) {
  var str =
    '<link rel="stylesheet" href="https://unpkg.com/gitalk/dist/gitalk.css">' +
    '<script src="https://unpkg.com/gitalk/dist/gitalk.min.js"></script>' +
    '<div id="gitalk-container"></div>'
  page.content += str
  return page
})

gitbook.events.bind('page.change', function() {
  var options = object.assign({}, this.options.pluginsConfig['gittalk'])
  const gitalk = new Gitalk(options)

  gitalk.render('gitalk-container')
})
