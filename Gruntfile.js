/**
 * The Legacy
 */
'use strict';

module.exports = function (grunt) {

  // Show elapsed time after tasks run
  require('time-grunt')(grunt);
  // Load all Grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // Browserify
    browserify: {
      dist: {
        files: {
          '_blackbriar/build.js': ['_blackbriar/js/**/*.js']
        }
      }
    },

    // Uglify
    uglify: {

    },

    watch: {
      browserify: {
        files: ['_blackbriar/js/**/*.js'],
        tasks: ['browserify']
      }
    },

    buildcontrol: {
      options: {
        dir: '_site',
        commit: true,
        push: true,
        message: 'Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%'
      },
      pages: {
        options: {
          remote: 'git@github.com:agtlucas/the-legacy.git',
          branch: 'gh-pages'
        }
      }
    }

  });

  grunt.registerTask('deploy', ['buildcontrol']);
  grunt.registerTask('w', ['watch']);

  // grunt.registerTask('default', ['watch']);


};