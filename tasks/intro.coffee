

console.log "Hello, I'm a cake tasks autoloaded by the build script"

console.log "I can be written in JavaScript or CoffeeScript, `.coffee` files are compiled before being evaluated."

console.log "I just need to end my #{__filename} filename accordingly."


# Look ma! I'm overidding the cake intro task.

task 'intro', 'Wooops', (options, em) ->

  message = """



           / /                                    / / //   ) )
          / /             ___       __           / / ((
         / /   //   / / //   ) ) //   ) )       / /    \\
        / /   ((___/ / //   / / //   / /       / /       ) )
       / /____/ / / / ((___/ / //   / /  ((___/ / ((___ / /



  """


  em.emit 'log', message

  # Tasks can go async too, just make sure to emit the end event
  # when the task is done.
  em.emit 'end'


# What about overriding the js part of the build script?

task 'js', '♥ JS', (options, em) ->

  message = """


                   ✌  ✌✌✌✌✌
                   ✌ ✌     ✌
                   ✌ ✌
                   ✌  ✌✌✌✌✌  fancy ascii art just to play with task plugins
             ✌     ✌       ✌
             ✌     ✌ ✌     ✌
              ✌✌✌✌✌   ✌✌✌✌✌



  """

  em.emit 'log', message

  # I can go async, and hook with any other build task
  gem.on 'end:js.scripts.concat', em.emit.bind(em, 'end')

  invoke 'js.scripts.concat'

