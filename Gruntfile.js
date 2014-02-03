// Gruntfile.js
//
//

module.exports = function (grunt) {
  'use strict';

  // Project configuration
  grunt.initConfig({

    // Metadata
    pkg: grunt.file.readJSON('package.json'),

    /************************************
     * grunt-bump
     * Bump package version, create tag, commit, push...
     ************************************/
    bump: {
      options: {
        files: ['package.json'],
        updateConfigs: [],
        commit: true,
        commitMessage: 'v%VERSION%',
        commitFiles: ['package.json'], // '-a' for all files
        createTag: true,
        tagName: 'v%VERSION%',
        tagMessage: 'v%VERSION%',
        push: true,
        pushTo: 'master',
        gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d' // options to use with '$ git describe'
      }
    }

  });


  // Load multiple grunt tasks using globbing patterns
  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

  // Use grunt-bump for changing version number
  grunt.loadNpmTasks('grunt-bump');

};
