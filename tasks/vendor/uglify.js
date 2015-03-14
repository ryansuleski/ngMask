module.exports = {
  dist: {
    options: {
      sourceMap: false,
      compress: {},
      sourceMapName: '<%= yeoman.dist %>/ngMask.min.map'
    },
    files: {
      '<%= yeoman.dist %>/ngMask.min.js': ['<%= yeoman.dist %>/ngMask.js']
    }
  }
}