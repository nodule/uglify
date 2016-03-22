module.exports = {
  name: "minify",
  ns: "uglify",
  description: "Minify a javascript source",
  phrases: {
    active: "Minifying source"
  },
  ports: {
    input: {
      "in": {
        title: "Source",
        type: "string"
      }
    },
    output: {
      out: {
        type: "string",
        title: "minified source"
      }
    }
  },
  dependencies: {
    npm: {
      "uglify-js": require('uglify-js')
    }
  },
  fn: function minify(input, $, output, state, done, cb, on, uglify_js) {
    var r = function() {
      output.out = $.write('in', uglify_js.minify($.in, {
        fromString: true
      }));
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}