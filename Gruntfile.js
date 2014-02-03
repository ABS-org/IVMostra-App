// Gruntfile.js
//
//

module.exports = function (grunt) {
  'use strict';

  // Project configuration
  grunt.initConfig({

    // Metadata
    pkg: grunt.file.readJSON('package.json'),

  });


  // Load multiple grunt tasks using globbing patterns
  require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

};
