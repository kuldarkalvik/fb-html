module.exports = function(grunt) {

  // Configure Grunt
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      options: {
        includePaths: require('node-bourbon').includePaths
      },
      dist: {
        files: {
          'public/style.css': 'scss/style.scss'
        }
      }
    },
    watch: {
      css: {
        files: 'scss/*.scss',
        tasks: 'sass',
        options: {
          livereload: true
        }
      },
      html: {
        files: '**/*.html',
        options: {
          livereload: true
        }
      }
    }
  });

  // Load Grunt plugins
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register tasks
  grunt.registerTask('default', ['sass', 'watch']);

}