require(['gitbook', 'gittalk'], function(gitbook, Gitalk) {
  gitbook.events.bind('start', function() {
    var link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://unpkg.com/gitalk/dist/gitalk.css'
    document.getElementsByTagName('head')[0].appendChild(link)
    var script = document.createElement('script')
    script.src = 'https://unpkg.com/gitalk/dist/gitalk.min.js'
    document.body.appendChild(script)
    var div = document.createElement('div')
    div.setAttribute('id', 'gitalk-container')
    document.body.appendChild(div)
  })

  gitbook.events.bind('page.change', function() {
    let config = gitbook.state.config.pluginsConfig
    var _defaults = {
      id: location.href
    }
    var options = Object.assign({}, _defaults, config.gittalk)
    console.log(window)
    const gitalk = new Gitalk(options)

    gitalk.render('gitalk-container')
  })
})
