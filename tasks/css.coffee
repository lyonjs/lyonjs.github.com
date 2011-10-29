
less = require 'less'
path = require 'path'
fs   = require 'fs'

writeFile = (dest, content, em) ->
  fs.writeFile dest, content, (err) ->
    return em.emit 'error', err if err
    em.emit 'silly', content
    em.emit 'log', 'style.css generated using less.'
    invoke 'css.concat'

# the name of the plugin filename does not matter, only its extension
# (.cs gets compiled into js)

task 'css', 'Run the lessjs thing on bs/less folders', (options, em) ->
  source = path.join __dirname, '..', 'bs', 'less'

  parser = new(less.Parser)(
    paths: [source]
    filename: 'style.less'
  )

  em.emit 'log', "Run less compiler » #{__dirname}"

  parser.parse '.class { width: 1 + 1 }', (e, tree) ->
    console.log tree.toCSS({ compress: true }) # Minify CSS output

  gem.on 'end:css.concat', em.emit.bind(em, 'end')
  gem.once 'end:mkdirs', ->
    fs.readFile path.join(source, 'bootstrap.less'), 'utf8', (err, file) ->
      return em.emit 'error', err if err
      parser.parse file, (err, tree) ->
        return em.emit 'error', err if err 

        # compression is done during script.concat anyway, set to true if you dont want
        # concat/rev on css
        content = tree.toCSS compress: false
        dest = path.join __dirname, '..', dir.intermediate, 'css', 'style.css'

        path.exists dest, (exist) ->
          return writeFile dest, content, em unless exist
          fs.readFile dest, 'utf8', (err, file) ->
            return em.emit 'error', err if err
            writeFile dest, [file, content].join('\n\n'), em

  invoke 'mkdirs'
